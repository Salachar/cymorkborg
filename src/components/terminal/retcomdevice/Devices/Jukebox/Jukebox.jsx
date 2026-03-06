import { useState, useEffect } from 'react';
import {
  Line,
  Divider,
  Section,
  InsetBox,
} from '@terminal/TerminalComponents';
import { getJukeboxTracks, getDefaultCost } from '@data/random/audioTracks';

export default function Jukebox({
  model = "JB-707",
  location = "Unknown location",
  cost,
  musicType,
  trackLimit = 4,
  songs,
}) {
  // Determine which songs to use
  const displaySongs = songs || getJukeboxTracks(musicType || "synthwave", trackLimit);
  const displayCost = cost || (musicType ? getDefaultCost(musicType) : "2¤");

  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Color mappings for records
  const colorMap = {
    red: { primary: 'rgb(239, 68, 68)', glow: 'rgba(239, 68, 68, 0.4)' },
    blue: { primary: 'rgb(59, 130, 246)', glow: 'rgba(59, 130, 246, 0.4)' },
    purple: { primary: 'rgb(168, 85, 247)', glow: 'rgba(168, 85, 247, 0.4)' },
    orange: { primary: 'rgb(251, 146, 60)', glow: 'rgba(251, 146, 60, 0.4)' },
    green: { primary: 'rgb(34, 197, 94)', glow: 'rgba(34, 197, 94, 0.4)' },
    cyan: { primary: 'rgb(79, 209, 197)', glow: 'rgba(79, 209, 197, 0.4)' },
    pink: { primary: 'rgb(255, 0, 128)', glow: 'rgba(255, 0, 128, 0.4)' },
  };

  const currentSong = displaySongs[selectedSongIndex] || {};
  const currentColor = colorMap[currentSong.color] || colorMap.cyan;

  // Spinning animation
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSongSelect = (index) => {
    setSelectedSongIndex(index);
    setIsPlaying(true);
    setRotation(0);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderRadius: '4px',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          padding: '1rem',
        }}
      >
        {/* Header */}
        <Line smoke large bold style={{ marginBottom: '0.5rem' }}>
          [JUKEBOX - MODEL {model}]
        </Line>
        <Line cyan style={{ marginBottom: '1rem' }}>{location}</Line>
        <Divider />

        {/* Main content area with record player on the right */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          {/* Left side - Song list */}
          <div style={{ flex: 1 }}>
            <InsetBox title="NOW PLAYING:">
              {currentSong.title ? (
                <>
                  <Line neon>Track: "{currentSong.title}"</Line>
                  <Line neon>Artist: {currentSong.artist}</Line>
                  <Line neon>Genre: {currentSong.genre}</Line>
                  <Line neon>Status: {isPlaying ? '♪ PLAYING' : '⏸ PAUSED'}</Line>
                </>
              ) : (
                <Line yellow>Select a song to play</Line>
              )}
            </InsetBox>

            <Section title="SONG SELECTION:">
              {displaySongs.map((song, i) => {
                const isSelected = i === selectedSongIndex;
                const songColor = colorMap[song.color] || colorMap.cyan;

                return (
                  <button
                    key={i}
                    onClick={() => handleSongSelect(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      marginBottom: '0.5rem',
                      backgroundColor: isSelected ? 'rgba(79, 209, 197, 0.15)' : 'rgba(51, 65, 85, 0.3)',
                      border: isSelected ? `1px solid ${songColor.primary}` : '1px solid rgb(71, 85, 105)',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'left',
                      fontFamily: 'monospace',
                    }}
                  >
                    {/* Color indicator dot */}
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: songColor.primary,
                        boxShadow: isSelected ? `0 0 8px ${songColor.glow}` : 'none',
                        flexShrink: 0,
                      }}
                    />

                    {/* Song info */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          color: isSelected ? songColor.primary : 'rgb(148, 163, 184)',
                        }}
                      >
                        {i + 1}. "{song.title}"
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'rgb(148, 163, 184)',
                          marginTop: '0.125rem',
                        }}
                      >
                        {song.artist}
                      </div>
                    </div>

                    {/* Playing indicator */}
                    {isSelected && isPlaying && (
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: songColor.primary,
                          animation: 'pulse 1.5s infinite',
                        }}
                      >
                        ♪
                      </div>
                    )}
                  </button>
                );
              })}
            </Section>
          </div>

          {/* Right side - Record player */}
          <div
            style={{
              width: '200px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {/* Record player housing */}
            <div
              style={{
                width: '180px',
                height: '180px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                borderRadius: '4px',
                border: '2px solid rgb(71, 85, 105)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Spinning record */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  backgroundColor: '#1a1a1a',
                  border: `3px solid ${currentColor.primary}`,
                  boxShadow: isPlaying ? `0 0 20px ${currentColor.glow}` : 'none',
                  position: 'relative',
                  transform: `rotate(${rotation}deg)`,
                  transition: isPlaying ? 'none' : 'transform 0.5s ease-out',
                }}
              >
                {/* Record grooves */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: `${120 - i * 12}px`,
                      height: `${120 - i * 12}px`,
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}

                {/* Center label */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: currentColor.primary,
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    color: 'rgb(19, 23, 34)',
                  }}
                >
                  {selectedSongIndex + 1}
                </div>

                {/* Spindle hole */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(19, 23, 34)',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                />
              </div>

              {/* Tonearm */}
              <div
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '10%',
                  width: '60px',
                  height: '2px',
                  backgroundColor: 'rgb(148, 163, 184)',
                  transformOrigin: 'right center',
                  transform: isPlaying ? 'rotate(-25deg)' : 'rotate(0deg)',
                  transition: 'transform 0.5s ease',
                }}
              >
                {/* Needle */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-4px',
                    top: '-2px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: currentColor.primary,
                    boxShadow: `0 0 6px ${currentColor.glow}`,
                  }}
                />
              </div>
            </div>

            {/* Stop button */}
            {isPlaying && (
              <button
                onClick={handleStop}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgb(239, 68, 68)',
                  borderRadius: '3px',
                  color: 'rgb(239, 68, 68)',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  transition: 'all 0.2s',
                }}
              >
                ⏹ STOP
              </button>
            )}
          </div>
        </div>

        <Divider />
        <Line yellow style={{ fontSize: '0.875rem' }}>
          Cost: {displayCost} per song
        </Line>
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
