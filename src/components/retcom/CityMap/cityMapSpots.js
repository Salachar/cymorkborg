// Hotspots for the Cy City overview map (cycity_overview.png).
//   x, y   percent of the image's width/height, placed on each printed label
//   path   RetCom node path; null = shown as a label only (not built yet)
//
// Rough first placement: turn on <CityMap calibrate /> and tap the map to
// read exact coordinates. Paths assume each district file's top node sits
// directly under "Cy City District Network".

const NET = 'Cy City District Network';

export const CY_CITY_MAP_SPOTS = [
  { label: 'Lilypond', x: 37.5, y: 20.1, path: `${NET}/The Slums/Lilypond` },
  { label: 'Edges', x: 57.0, y: 17.4, path: `${NET}/The Hills/Edges` },
  { label: 'Bigmosse', x: 25.2, y: 30.3, path: `${NET}/The Slums/Bigmosse` },
  { label: 'Space Port', x: 46.9, y: 26.2, path: `${NET}/Ports` },
  { label: 'Air Port', x: 38.5, y: 36.2, path: `${NET}/Ports` },
  { label: 'Ports', x: 45.6, y: 36.7, path: `${NET}/Ports` },
  { label: 'Mosscroft', x: 79.5, y: 34.2, path: `${NET}/The Industries` },
  { label: 'Svärta', x: 18.6, y: 38.6, path: `${NET}/The Inbetweens/Svärta` },
  { label: 'North Central', x: 31.8, y: 44.4, path: `${NET}/North Central` },
  { label: 'Sea Port', x: 66.7, y: 43.9, path: `${NET}/Ports` },
  { label: 'Barnyard Fields', x: 62.6, y: 46.8, path: `${NET}/The Slums/Barnyard Fields` },
  { label: 'Aquaculture Cage Maze', x: 84.2, y: 47.3, path: `${NET}/Waterways/Aquaculture Cage Maze` },
  { label: 'G0', x: 49.8, y: 49.5, path: `${NET}/G0` },
  { label: 'Borghold', x: 11.1, y: 49.3, path: `${NET}/The Inbetweens/Borghold` },
  { label: 'Lake Gravel', x: 21.2, y: 50.4, path: `${NET}/Waterways/Lake Gravel` },
  { label: 'Undersjön', x: 40.0, y: 54.8, path: `${NET}/Undersjon` },
  { label: 'The Arcs', x: 25.1, y: 58.3, path: null },
  { label: 'Oak Isles', x: 9.8, y: 61.7, path: `${NET}/The Hills/Oak Isles` },
  { label: 'Laketon', x: 55.9, y: 64.5, path: `${NET}/The Slums/Laketon` },
  { label: 'South Central', x: 26.3, y: 72.8, path: `${NET}/South Central` },
  { label: 'Burnchurch Hex', x: 42.0, y: 74.7, path: `${NET}/The Inbetweens/Burnchurch Hex` },
  { label: 'Galgbacken', x: 59.5, y: 73.9, path: `${NET}/The Hills/Galgbacken` },
  { label: 'Low Meadow', x: 69.6, y: 80.2, path: `${NET}/The Inbetweens/Low Meadow` },
];

export default CY_CITY_MAP_SPOTS;
