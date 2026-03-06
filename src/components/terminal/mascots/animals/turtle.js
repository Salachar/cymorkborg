import ATTACK_SPRITE from "@images/mascots/turtle/Attack.png"
import DIE_SPRITE from "@images/mascots/turtle/Die.png"
import HIDE_SPRITE from "@images/mascots/turtle/Hide.png"
import HURT_SPRITE from "@images/mascots/turtle/Hurt.png"
import IDLE_SPRITE from "@images/mascots/turtle/Idle.png"
import JUMP_SPRITE from "@images/mascots/turtle/Jump.png"
import LIEDOWN_SPRITE from "@images/mascots/turtle/LieDown.png"
import SIT_SPRITE from "@images/mascots/turtle/Sit.png"
import SLEEP_SPRITE from "@images/mascots/turtle/Sleep.png"
import WALKING_SPRITE from "@images/mascots/turtle/Walking.png"

export const TURTLE_SPRITE = {
  name: 'turtle',
  // No single sprite sheet - each animation has its own file
  spriteSheet: null,
  frameWidth: 32,
  frameHeight: 32,
  offsetX: 0,
  offsetY: 0,
  fps: 8, // Default FPS for all animations (can be overridden per-animation)
  facingDirection: 'right', // Will be flipped horizontally to face left
  scale: 4,
  position: {
    bottom: 0,
    right: '-1rem',
  },

  animations: {
    idle: {
      frames: 8,
      row: 1, // Row is always 1 for separate files
      file: IDLE_SPRITE,
      loop: true,
      fps: 6, // Slower breathing
    },
    walk: {
      frames: 8,
      row: 1,
      file: WALKING_SPRITE,
      loop: true,
    },
    sit: {
      frames: 7,
      row: 1,
      file: SIT_SPRITE,
      loop: true,
      fps: 4,
    },
    sleep: {
      frames: 12,
      row: 1,
      file: SLEEP_SPRITE,
      loop: true,
      fps: 4, // Very slow
    },
    liedown: {
      frames: 15,
      row: 1,
      file: LIEDOWN_SPRITE,
      loop: false, // Transition animation
      fps: 10,
    },
    jump: {
      frames: 14,
      row: 1,
      file: JUMP_SPRITE,
      loop: false,
      fps: 12,
    },
    hide: {
      frames: 13,
      row: 1,
      file: HIDE_SPRITE,
      loop: false, // Plays once, goes into shell
    },
    attack: {
      frames: 10,
      row: 1,
      file: ATTACK_SPRITE,
      loop: false,
    },
    hurt: {
      frames: 12,
      row: 1,
      file: HURT_SPRITE,
      loop: false,
      fps: 10,
    },
    die: {
      frames: 10,
      row: 1,
      file: DIE_SPRITE,
      loop: false,
      fps: 6, // Slower death animation
    },
  },

  // Behavior patterns (turtle-specific)
  behaviors: {
    idle: {
      default: true,
      transitions: [
        { to: 'hide', chance: 0.1, after: 20000 }, // Turtle hides sometimes
        { to: 'liedown', chance: 0.15, after: 30000 },
      ],
    },
    hide: {
      duration: 3000, // Stay hidden briefly
      returnTo: 'idle',
    },
    liedown: {
      returnTo: 'sleep', // Lie down leads to sleep
    },
    sleep: {
      exitOn: ['click', 'activity'],
      returnTo: 'idle',
    },
    sit: {
      duration: 5000,
      returnTo: 'idle',
    },
    jump: {
      returnTo: 'idle',
    },
    attack: {
      returnTo: 'idle',
    },
    hurt: {
      returnTo: 'idle',
    },
  },
};
