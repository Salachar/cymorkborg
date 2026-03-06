import React, { useState, useEffect, useRef } from 'react';
import { getAnimalSprite } from './registry';

/**
 * TerminalMascot - Pixel art sprite mascot with animations
 *
 * Renders an animated pixel art mascot in a fixed position.
 * Uses CSS background-position to show the correct frame from a sprite sheet.
 *
 * Props:
 * - animal: string - Animal ID from registry (e.g., 'fox-red')
 * - animation: string - Current animation to play (e.g., 'idle', 'walk')
 * - scale: number - Display scale multiplier (default 2)
 * - position: object - Position styles (default: bottom-right)
 * - onAnimationComplete: function - Callback when non-looping animation finishes
 * - onClick: function - Click handler
 */
export default function TerminalMascot({
  animal = 'fox-red',
  animation = 'idle',
  onAnimationComplete,
  onClick,
}) {
  const spriteConfig = getAnimalSprite(animal);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(animation);
  const lastFrameTimeRef = useRef(Date.now());

  const scale = spriteConfig.scale || 1;
  const position = spriteConfig.position || {
    bottom: 0,
    right: 0,
  };

  // Fallback if sprite not found
  if (!spriteConfig) {
    console.error(`Sprite config not found for animal: ${animal}`);
    return null;
  }

  const animConfig = spriteConfig.animations[currentAnimation];
  if (!animConfig) {
    console.warn(`Animation "${currentAnimation}" not found for ${animal}`);
    return null;
  }

  // Calculate display size (one frame)
  const displayWidth = spriteConfig.frameWidth * scale;
  const displayHeight = spriteConfig.frameHeight * scale;

  // Get FPS (animation-specific or default)
  const fps = animConfig.fps || spriteConfig.fps || 10;
  const frameDuration = 1000 / fps;

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    let animationId;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - lastFrameTimeRef.current;

      if (elapsed >= frameDuration) {
        setCurrentFrame((prevFrame) => {
          const nextFrame = prevFrame + 1;

          // Check if we've reached the end of this animation
          if (nextFrame >= animConfig.frames) {
            if (animConfig.loop !== false) {
              // Loop back to start (loop is true or undefined)
              return 0;
            } else {
              // Non-looping animation finished - defer callback to avoid setState during render
              if (onAnimationComplete) {
                setTimeout(() => onAnimationComplete(currentAnimation), 0);
              }
              // Hold on last frame
              return animConfig.frames - 1;
            }
          }

          return nextFrame;
        });

        lastFrameTimeRef.current = now;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [currentAnimation, animConfig, frameDuration, onAnimationComplete]);

  // Reset frame when animation changes
  useEffect(() => {
    setCurrentFrame(0);
    lastFrameTimeRef.current = Date.now();
  }, [currentAnimation]);

  // Sync external animation prop changes
  useEffect(() => {
    if (animation !== currentAnimation) {
      setCurrentAnimation(animation);
    }
  }, [animation]); // Only depend on animation prop, not state

  // Get the sprite sheet source (either main sheet or animation-specific file)
  const spriteSource = animConfig.file || spriteConfig.spriteSheet;

  if (!spriteSource) {
    console.error(`No sprite source found for animation "${currentAnimation}" in animal "${animal}"`);
    return null;
  }

  // Get offsets (default to 0 if not specified)
  const offsetX = spriteConfig.offsetX || 0;
  const offsetY = spriteConfig.offsetY || 0;

  // Check if sprite should be flipped horizontally
  const shouldFlip = spriteConfig.facingDirection === 'right';

  // Calculate background position
  // Convert row to 0-indexed (rows in config are 1-indexed)
  const rowIndex = animConfig.row - 1;

  // Position = -(frameIndex * frameWidth * scale) - offset for X
  // Position = -(rowIndex * frameHeight * scale) - offset for Y
  const backgroundX = -(currentFrame * spriteConfig.frameWidth * scale) - (offsetX * scale);
  const backgroundY = -(rowIndex * spriteConfig.frameHeight * scale) - (offsetY * scale);

  // Calculate the width needed for the sprite sheet
  // For separate files, use current animation's frame count
  // For single sheet, use max frames across all animations
  const maxFrames = animConfig.file
    ? animConfig.frames
    : Math.max(...Object.values(spriteConfig.animations).map(a => a.frames));
  const spriteSheetWidthScaled = spriteConfig.frameWidth * maxFrames * scale;

  return (
    <div
      className="terminal-mascot"
      style={{
        position: 'absolute',
        width: `${displayWidth}px`,
        height: `${displayHeight}px`,
        ...position,
        cursor: onClick ? 'pointer' : 'default',
        // Pixelated rendering for crisp pixels
        imageRendering: 'pixelated',
        WebkitImageRendering: 'pixelated',
        MozImageRendering: 'pixelated',
        msImageRendering: 'pixelated',
        // Horizontal flip if facing right
        transform: shouldFlip ? 'scaleX(-1)' : 'none',
        // Background sprite
        backgroundImage: `url(${spriteSource})`,
        backgroundPosition: `${backgroundX}px ${backgroundY}px`,
        backgroundSize: `${spriteSheetWidthScaled}px auto`,
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
      title={spriteConfig.displayName || animal}
    />
  );
}

/**
 * TerminalMascotController - Auto-behavior wrapper
 *
 * Manages animation state and automatic transitions.
 * Handles idle behaviors, click interactions, and terminal activity responses.
 */
export function TerminalMascotController({
  animal = 'fox',
  initialAnimation = 'idle',
  onTerminalActivity,
  onClick: onClickProp,
}) {
  const spriteConfig = getAnimalSprite(animal);
  const [animation, setAnimation] = useState(initialAnimation);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const behaviorTimerRef = useRef(null);

  if (!spriteConfig) return null;

  // Handle animation completion (for non-looping animations)
  const handleAnimationComplete = (completedAnimation) => {
    const behavior = spriteConfig.behaviors?.[completedAnimation];
    if (behavior?.returnTo) {
      setAnimation(behavior.returnTo);
    }
  };

  // Handle click
  const handleClick = () => {
    // Play jump animation on click if available
    if (spriteConfig.animations.jump) {
      setAnimation('jump');
    }

    // Reset activity timer
    setLastActivity(Date.now());

    // Call external handler if provided
    if (onClickProp) {
      onClickProp();
    }
  };

  // Auto-behavior system - checks for transitions periodically
  useEffect(() => {
    if (!spriteConfig.behaviors) return;

    const checkBehaviorTransitions = () => {
      const currentBehavior = spriteConfig.behaviors[animation];
      if (!currentBehavior?.transitions) return;

      const idleTime = Date.now() - lastActivity;

      // Check each possible transition
      for (const transition of currentBehavior.transitions) {
        if (idleTime >= transition.after && Math.random() < transition.chance) {
          setAnimation(transition.to);
          break;
        }
      }
    };

    // Check for transitions every 5 seconds
    behaviorTimerRef.current = setInterval(checkBehaviorTransitions, 5000);

    return () => {
      if (behaviorTimerRef.current) {
        clearInterval(behaviorTimerRef.current);
      }
    };
  }, [animation, lastActivity, spriteConfig]);

  // Update activity on external terminal activity
  useEffect(() => {
    if (onTerminalActivity !== undefined) {
      setLastActivity(Date.now());

      // Wake up if sleeping
      if (animation === 'sleep' && spriteConfig.animations.idle) {
        setAnimation('idle');
      }
    }
  }, [onTerminalActivity, animation, spriteConfig]);

  return (
    <TerminalMascot
      animal={animal}
      animation={animation}
      onAnimationComplete={handleAnimationComplete}
      onClick={handleClick}
    />
  );
}
