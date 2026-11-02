import { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Page, PageHeader } from '@components/Layout/Layout';
import ChromeBar from '@components/Chrome/ChromeBar';

import {
  Grid,
  Thumb,
  ThumbImage,
  Missing,
  Overlay,
  ViewerImage,
  ViewerMissing,
  Arrow,
} from './Artwork.styles';

// Eager glob gives us every file's URL up front; the browser still only
// downloads thumbnails as they near the viewport (loading="lazy").
const IMAGE_MODULES = import.meta.glob('../../images/artwork/*.png', { eager: true });

// Sorted by the number in the file name. The list comes from the folder
// itself, so adding or removing art needs no count change here.
const IMAGES = Object.entries(IMAGE_MODULES)
  .map(([path, module]) => {
    const match = path.match(/(\d+)\.png$/);
    return match ? { num: Number(match[1]), src: module.default } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.num - b.num);

export default function Artwork() {
  // Index into IMAGES, or null when the viewer is closed.
  const [openIndex, setOpenIndex] = useState(null);
  const count = IMAGES.length;

  return (
    <>
      <ChromeBar />
      <Page>
        <PageHeader title="Gallery Archive" subtitle="Visual data from the streets of Cy" />

        <Grid>
          {IMAGES.map((image, index) => (
            <Thumbnail
              key={image.num}
              image={image}
              onOpen={() => setOpenIndex(index)}
            />
          ))}
        </Grid>

        {openIndex !== null && (
          <Viewer
            image={IMAGES[openIndex]}
            onClose={() => setOpenIndex(null)}
            onPrev={() => setOpenIndex((i) => (i - 1 + count) % count)}
            onNext={() => setOpenIndex((i) => (i + 1) % count)}
          />
        )}
      </Page>
    </>
  );
}

function Thumbnail({ image, onOpen }) {
  const [failed, setFailed] = useState(false);

  return (
    <Thumb type="button" onClick={onOpen} aria-label={`Open artwork ${image.num}`}>
      {failed ? (
        <Missing>Missing</Missing>
      ) : (
        <ThumbImage
          src={image.src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </Thumb>
  );
}

// Fullscreen view. Closes on a click outside the image or Escape; the
// arrow buttons (or arrow keys) move between images.
//
// Rendered into document.body: inside the page it would sit within the
// app's scroll container, and scrolling over the overlay would scroll
// the gallery behind it.
function Viewer({ image, onClose, onPrev, onNext }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  // Buttons and the image itself shouldn't count as "outside".
  const stop = (fn) => (e) => {
    e.stopPropagation();
    fn?.();
  };

  return createPortal(
    <Overlay
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Artwork ${image.num}`}
      tabIndex={-1}
      onClick={onClose}
    >
      <Arrow type="button" data-side="prev" aria-label="Previous" onClick={stop(onPrev)}>
        <ChevronLeft size={28} />
      </Arrow>

      {/* Keyed so a failed load doesn't stick to the next image. */}
      <FullImage key={image.num} image={image} onClick={stop()} />

      <Arrow type="button" data-side="next" aria-label="Next" onClick={stop(onNext)}>
        <ChevronRight size={28} />
      </Arrow>
    </Overlay>,
    document.body
  );
}

function FullImage({ image, onClick }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ViewerMissing onClick={onClick}>Image not found</ViewerMissing>;
  }

  return (
    <ViewerImage
      src={image.src}
      alt={`Artwork ${image.num}`}
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  );
}
