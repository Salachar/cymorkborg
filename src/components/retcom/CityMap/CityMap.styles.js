// CityMap: in-universe RetCom styling (red theme, like RetComImage).

import styled from '@emotion/styled';

const RED = 'rgb(239, 68, 68)';
const RED_DIM = 'rgba(239, 68, 68, 0.45)';
const TEAL = 'rgb(79, 209, 197)';
const SMOKE = 'rgb(148, 163, 184)';
const TEXT = 'rgb(226, 232, 240)';

export const Frame = styled.div`
  border: 1px solid ${RED_DIM};
  border-radius: 4px;
  background-color: rgb(8, 8, 12);
  overflow: hidden;
  font-family: monospace;
`;

// The image and its hotspots share this box, so percentages line up at
// any width.
export const Stage = styled.div`
  position: relative;
  line-height: 0;

  &[data-calibrate='true'] {
    cursor: crosshair;
  }
`;

export const MapImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-drag: none;
`;

// Big invisible tap target, centred on the point, with a small visible
// marker so touch users can see what's tappable.
export const Spot = styled.button`
  position: absolute;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  transform: translate(-50%, -50%);
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.7rem;
    height: 0.7rem;
    transform: translate(-50%, -50%);
    border: 2px solid ${TEAL};
    border-radius: 50%;
    background-color: rgba(79, 209, 197, 0.25);
    box-shadow: 0 0 8px rgba(79, 209, 197, 0.8);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::after {
      width: 1rem;
      height: 1rem;
      background-color: rgba(79, 209, 197, 0.5);
    }
  }

  &:focus-visible {
    outline: 2px solid ${TEAL};
    outline-offset: -6px;
  }
`;

export const Readout = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.3rem 0.55rem;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid ${TEAL};
  border-radius: 3px;
  font-size: 0.75rem;
  line-height: 1.4;
  color: ${TEAL};
  pointer-events: none;
`;

export const Legend = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10.5rem, 1fr));
  gap: 0.35rem;
  padding: 0.75rem;
  border-top: 1px solid ${RED_DIM};
`;

export const LegendTitle = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 0.15rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: ${RED};
`;

export const LegendItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.25rem;
  padding: 0.3rem 0.55rem;
  background-color: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.78rem;
  text-align: left;
  color: ${TEXT};
  cursor: pointer;

  &::before {
    content: '';
    flex-shrink: 0;
    width: 0.45rem;
    height: 0.45rem;
    border: 1.5px solid ${TEAL};
    border-radius: 50%;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      border-color: ${TEAL};
    }
  }

  &:disabled {
    color: ${SMOKE};
    opacity: 0.6;
    cursor: default;

    &::before {
      border-color: ${SMOKE};
    }
  }

  &:focus-visible {
    outline: 1px solid ${TEAL};
    outline-offset: 2px;
  }
`;
