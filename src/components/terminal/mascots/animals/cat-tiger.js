import ATTACK_SPRITE from "@images/mascots/cat-tiger/Attack.png"
import IDLE_SPRITE from "@images/mascots/cat-tiger/Idle.png"
import JUMP_SPRITE from "@images/mascots/cat-tiger/Jump.png"
import SIT_SPRITE from "@images/mascots/cat-tiger/Sit.png"
import SLEEP_SPRITE from "@images/mascots/cat-tiger/Sleep.png"
import WALKING_SPRITE from "@images/mascots/cat-tiger/Run.png"

export const CAT_TIGER_SPRITE = {
  name: 'cat-tiger',
  // No single sprite sheet - each animation has its own file
  spriteSheet: null,
  frameWidth: 32,
  frameHeight: 32,
  offsetX: 0,
  offsetY: 0,
  fps: 8, // Default FPS for all animations (can be overridden per-animation)
  facingDirection: 'right', // Will be flipped horizontally to face left
  scale: 3,
  position: {
    bottom: 0,
    right: 0,
  },

  animations: {
    idle: {
      frames: 14,
      row: 1, // Row is always 1 for separate files
      file: IDLE_SPRITE,
      loop: true,
      fps: 6, // Slower breathing
    },
    walk: {
      frames: 7,
      row: 1,
      file: WALKING_SPRITE,
      loop: true,
    },
    sit: {
      frames: 3,
      row: 1,
      file: SIT_SPRITE,
      loop: true,
      fps: 4,
    },
    sleep: {
      frames: 3,
      row: 1,
      file: SLEEP_SPRITE,
      loop: true,
      fps: 4, // Very slow
    },
    jump: {
      frames: 13,
      row: 1,
      file: JUMP_SPRITE,
      loop: false,
      fps: 12,
    },
    attack: {
      frames: 9,
      row: 1,
      file: ATTACK_SPRITE,
      loop: false,
    },
  },

  // Behavior patterns (turtle-specific)
  behaviors: {
    idle: {
      default: true,
      transitions: [
        { to: 'sit', chance: 0.5, after: 5000 },
        { to: 'walk', chance: 0.25, after: 10000 },
      ],
    },
    sit: {
      // Removed duration - let transitions handle it
      transitions: [
        { to: 'idle', chance: 0.5, after: 5000 },  // Fixed typo: 'id' → 'idle'
        { to: 'sleep', chance: 0.5, after: 5000 },
      ],
    },
    sleep: {
      exitOn: ['click', 'activity'],
      transitions: [
        { to: 'idle', chance: 0.3, after: 30000 },  // 30% chance to wake after 30s
      ],
      // Note: exitOn still works, this just adds natural waking
    },
    walk: {
      duration: 3000,  // Walk for 3s then return
      returnTo: 'idle',
    },
    jump: {
      returnTo: 'idle',
    },
    attack: {
      returnTo: 'idle',
    },
  },
};
