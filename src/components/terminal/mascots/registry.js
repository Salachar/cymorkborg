import { FOX_SPRITE } from './animals/fox';
import { TURTLE_SPRITE } from './animals/turtle';
import { CAT_TIGER_SPRITE } from './animals/cat-tiger';
import { WOLF_SPRITE } from './animals/wolf';

export const ANIMAL_REGISTRY = {
  'fox': {
    ...FOX_SPRITE,
    displayName: 'Fox',
  },
  'turtle': {
    ...TURTLE_SPRITE,
    displayName: 'Turtle',
  },
  'cat-tiger': {
    ...CAT_TIGER_SPRITE,
    displayName: 'Tiger Cat',
  },
  'wolf': {
    ...WOLF_SPRITE,
    displayName: 'Wolf',
  },
};

export function getAnimalSprite(animalId) {
  const sprite = ANIMAL_REGISTRY[animalId];
  if (!sprite) {
    console.warn(`Animal sprite "${animalId}" not found in registry. Available: ${Object.keys(ANIMAL_REGISTRY).join(', ')}`);
    return null;
  }
  return sprite;
}

export function getAvailableAnimals() {
  return Object.keys(ANIMAL_REGISTRY);
}
