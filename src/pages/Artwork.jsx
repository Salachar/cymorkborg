import { useState, useMemo } from 'react';
import { Page, PageHeader } from "../components/PageComponents";
import { X } from 'lucide-react';

export default function Artwork() {
  const [selectedImage, setSelectedImage] = useState(null);
  const totalImages = 42;

  // Import all images using Vite's glob import
  const imageModules = useMemo(() => {
    return import.meta.glob('../images/artwork/*.png', { eager: true });
  }, []);

  // Create a mapping of image numbers to their imported paths
  const imagePaths = useMemo(() => {
    const paths = {};
    Object.entries(imageModules).forEach(([path, module]) => {
      const match = path.match(/(\d+)\.png$/);
      if (match) {
        paths[parseInt(match[1])] = module.default;
      }
    });
    return paths;
  }, [imageModules]);

  // Generate array of image numbers
  const images = Array.from({ length: totalImages }, (_, i) => i + 1);

  return (
    <Page>
      <PageHeader
        title="Gallery Archive"
        subtitle="Visual Data From The Streets of Cy"
      />

      <div className="mb-8">
        <div className="bg-cy-cyan/10 border-l-4 border-cy-cyan p-4">
          <p className="text-sm text-gray-400">
            <span className="text-cy-cyan font-bold">{totalImages}</span> archived visual files
            <span className="text-gray-600 ml-2">// Click images to expand</span>
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12">
        {images.map((num) => (
          <ImageCard
            key={num}
            imageNum={num}
            imageSrc={imagePaths[num]}
            onClick={() => setSelectedImage(num)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <FullscreenViewer
          imageNum={selectedImage}
          imageSrc={imagePaths[selectedImage]}
          onClose={() => setSelectedImage(null)}
          onPrev={() => setSelectedImage(selectedImage > 1 ? selectedImage - 1 : totalImages)}
          onNext={() => setSelectedImage(selectedImage < totalImages ? selectedImage + 1 : 1)}
        />
      )}
    </Page>
  );
}

// Image Card Component
function ImageCard({ imageNum, imageSrc, onClick }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      onClick={onClick}
      className="relative aspect-square bg-black border border-gray-800 overflow-hidden cursor-pointer group hover:border-cy-cyan transition-all duration-300"
    >
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-cy-cyan animate-pulse">LOADING...</div>
        </div>
      )}

      {/* Error state */}
      {(imageError || !imageSrc) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-red-400 text-xs">
          <span className="font-bold mb-1">ERROR</span>
          <span className="text-gray-600">IMG_{imageNum}.png</span>
        </div>
      )}

      {/* Image */}
      {!imageError && imageSrc && (
        <img
          src={imageSrc}
          alt={`Artwork ${imageNum}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Hover overlay with glitch effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <div className="text-cy-cyan text-xs font-bold tracking-wider">
            IMG_{String(imageNum).padStart(3, '0')}
          </div>
        </div>
      </div>

      {/* Scanline effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)'
        }}
      />
    </div>
  );
}

// Fullscreen Viewer Component
function FullscreenViewer({ imageNum, imageSrc, onClose, onPrev, onNext }) {
  const [imageError, setImageError] = useState(false);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-black/80 border border-cy-cyan text-cy-cyan hover:bg-cy-cyan hover:text-black transition-all duration-200"
      >
        <X size={24} />
      </button>

      {/* Image info */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 border border-cy-cyan px-4 py-2">
        <div className="text-cy-cyan font-bold text-sm tracking-wider">
          IMG_{String(imageNum).padStart(3, '0')}.png
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-black/80 border border-cy-cyan text-cy-cyan hover:bg-cy-cyan hover:text-black transition-all duration-200 text-2xl font-bold"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-black/80 border border-cy-cyan text-cy-cyan hover:bg-cy-cyan hover:text-black transition-all duration-200 text-2xl font-bold"
      >
        →
      </button>

      {/* Main image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {(imageError || !imageSrc) ? (
          <div className="bg-gray-900 border-2 border-red-400 p-12 text-center">
            <div className="text-red-400 text-2xl font-bold mb-4">IMAGE LOAD ERROR</div>
            <div className="text-gray-500">IMG_{imageNum}.png not found</div>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={`Artwork ${imageNum}`}
            className="max-w-full max-h-[90vh] object-contain border-2 border-cy-cyan shadow-lg"
            style={{
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)'
            }}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-gray-700 px-6 py-2">
        <div className="text-gray-400 text-xs space-x-4">
          <span><span className="text-cy-cyan">←/→</span> Navigate</span>
          <span><span className="text-cy-cyan">ESC</span> Close</span>
          <span><span className="text-cy-cyan">Click</span> to close</span>
        </div>
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.5) 2px, rgba(0, 255, 255, 0.5) 4px)'
        }}
      />
    </div>
  );
}
