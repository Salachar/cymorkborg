import SPRITE_SHEET from "@images/mascots/wolf.png"

export const WOLF_SPRITE = {
  name: 'wolf',
  spriteSheet: SPRITE_SHEET,
  frameWidth: 32,
  frameHeight: 32,
  offsetX: 0,
  offsetY: 0,
  scale: 6,
  position: {
    bottom: 0,
    right: '-3rem',
  },
  fps: 6,
  facingDirection: 'right',

  animations: {
    idle: {
      frames: 4,
      row: 5,
      loop: true,
    },
    walk: {
      frames: 4,
      row: 2,
      loop: true,
    },
    sit: {
      frames: 2,
      row: 6,
      fps: 4,
      loop: true,
    },
    sleep: {
      frames: 4,
      row: 7,
      fps: 4, // Very slow
      loop: true,
    },
    jump: {
      frames: 10,
      row: 8,
      fps: 14,
      loop: false, // Plays once
    },
    attack: {
      frames: 8,
      row: 1,
      fps: 10,
      loop: false, // Plays once
    },
  },

  // Behavior patterns (optional, for auto-animation system)
  behaviors: {
    idle: {
      default: true,
      transitions: [
        { to: 'sit', chance: 0.15, after: 15000 },
        { to: 'sleep', chance: 0.1, after: 45000 },
      ],
    },
    sit: {
      duration: 5000,
      returnTo: 'idle',
    },
    sleep: {
      exitOn: ['click', 'activity'],
      returnTo: 'idle',
    },
    jump: {
      returnTo: 'idle',
    },
  },
};
