import { useState } from 'react';

import { useFollowLink } from '@components/Toast/Toast';

import CY_CITY_MAP_SPOTS from './cityMapSpots';
import {
  Frame,
  Stage,
  MapImage,
  Spot,
  Readout,
  Legend,
  LegendTitle,
  LegendItem,
} from './CityMap.styles';

/**
 * Interactive city map. Tap a marker on the map, or an entry in the legend
 * below it, to jump to that location's node in RetCom (expands its parents
 * and scrolls to it, the same way share links do).
 *
 * Props:
 *   src        the map image
 *   spots      [{ label, x, y, path }]; x/y are percent of the image;
 *              path null = label only. Defaults to the Cy City spots.
 *   calibrate  tap the map to read exact x/y for placing spots (dev aid;
 *              leave off for players)
 */
export default function CityMap({ src, spots = CY_CITY_MAP_SPOTS, calibrate = false }) {
  const follow = useFollowLink();
  const [readout, setReadout] = useState(null);

  const go = (spot) => {
    if (spot.path) follow({ to: '/retcom', focusPath: spot.path });
  };

  const handleCalibrate = (e) => {
    if (!calibrate) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    setReadout({ x, y });
    // eslint-disable-next-line no-console
    console.log(`x: ${x}, y: ${y}`);
  };

  const linked = spots.filter((s) => s.path);

  return (
    <Frame>
      <Stage data-calibrate={calibrate || undefined} onClick={handleCalibrate}>
        <MapImage src={src} alt="Cy City overview map" draggable={false} />

        {!calibrate &&
          linked.map((spot) => (
            <Spot
              key={spot.label}
              type="button"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                go(spot);
              }}
              aria-label={`Go to ${spot.label}`}
              title={spot.label}
            />
          ))}

        {calibrate && (
          <Readout>
            {readout ? `x: ${readout.x}  y: ${readout.y}` : 'CALIBRATE: tap the map'}
          </Readout>
        )}
      </Stage>

      <Legend>
        <LegendTitle>// LOCATIONS</LegendTitle>
        {spots.map((spot) => (
          <LegendItem
            key={spot.label}
            type="button"
            disabled={!spot.path}
            onClick={() => go(spot)}
            title={spot.path ? `Go to ${spot.label}` : `${spot.label} (no node yet)`}
          >
            {spot.label}
          </LegendItem>
        ))}
      </Legend>
    </Frame>
  );
}
