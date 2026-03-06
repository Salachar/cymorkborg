import { useState, useEffect } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';
import { getAllChannelKeys, getChannelInfo, getRandomRadioTrack } from '@data/random/audioTracks';

export default function Radio({
  id = "radio-default",
  initialChannel,
  model = "CR-2077",
}) {
  const channelKeys = getAllChannelKeys();

  // Get initial channel index
  const getInitialChannelIndex = () => {
    if (initialChannel) {
      const index = channelKeys.indexOf(initialChannel);
      return index >= 0 ? index : 0;
    }
    return 0;
  };

  const [channelIndex, setChannelIndex] = useState(getInitialChannelIndex);
  const [currentTrack, setCurrentTrack] = useState(null);

  const currentChannelKey = channelKeys[channelIndex];
  const channelInfo = getChannelInfo(currentChannelKey);

  // Load random track when channel changes
  useEffect(() => {
    if (currentChannelKey) {
      const track = getRandomRadioTrack(currentChannelKey);
      setCurrentTrack(track);
    }
  }, [channelIndex, currentChannelKey, id]);

  const handlePrevChannel = () => {
    setChannelIndex(prev => (prev - 1 + channelKeys.length) % channelKeys.length);
  };

  const handleNextChannel = () => {
    setChannelIndex(prev => (prev + 1) % channelKeys.length);
  };

  // Color mapping for visualizer
  const getTrackColor = () => {
    if (!currentTrack || !currentTrack.color) return 'rgb(79, 209, 197)'; // default cyan

    const colorMap = {
      red: 'rgb(239, 68, 68)',
      blue: 'rgb(59, 130, 246)',
      purple: 'rgb(168, 85, 247)',
      orange: 'rgb(251, 146, 60)',
      green: 'rgb(34, 197, 94)',
      cyan: 'rgb(79, 209, 197)',
      pink: 'rgb(255, 0, 128)',
    };

    return colorMap[currentTrack.color] || 'rgb(79, 209, 197)';
  };

  const visualizerColor = getTrackColor();

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
          [CYBER RADIO - {model}]
        </Line>
        <Divider />

        {/* Main horizontal layout */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {/* Left side - Channel tuner */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '2px solid rgb(71, 85, 105)',
              borderRadius: '4px',
              padding: '1rem',
              minWidth: '180px',
            }}
          >
            {/* Channel display */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <div
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  color: 'rgb(0, 255, 255)',
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                }}
              >
                {channelInfo?.channel || '---'}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'rgb(148, 163, 184)',
                  marginTop: '0.5rem',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                }}
              >
                {channelInfo?.name || 'NO SIGNAL'}
              </div>
            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {/* Previous button */}
              <button
                onClick={handlePrevChannel}
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'rgba(79, 209, 197, 0.2)',
                  border: '1px solid rgb(79, 209, 197)',
                  borderRadius: '3px',
                  color: 'rgb(79, 209, 197)',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'monospace',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ◀
              </button>

              {/* Next button */}
              <button
                onClick={handleNextChannel}
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'rgba(79, 209, 197, 0.2)',
                  border: '1px solid rgb(79, 209, 197)',
                  borderRadius: '3px',
                  color: 'rgb(79, 209, 197)',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'monospace',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Middle - Now Playing */}
          <div
            style={{
              flex: 1,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              border: '1px solid rgb(71, 85, 105)',
              borderRadius: '4px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                color: 'rgb(250, 204, 21)',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                fontFamily: 'monospace',
              }}
            >
              ♫ NOW PLAYING:
            </div>
            {currentTrack ? (
              <>
                <Line cyan style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                  {currentTrack.title}
                </Line>
                <Line smoke style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  {currentTrack.artist}
                </Line>
                <Line smoke style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  {currentTrack.genre}
                </Line>
              </>
            ) : (
              <Line yellow style={{ fontSize: '0.875rem' }}>
                No signal detected
              </Line>
            )}
          </div>

          {/* Right side - Audio Visualizer */}
          <div
            style={{
              width: '200px',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '2px solid rgb(71, 85, 105)',
              borderRadius: '4px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-evenly',
              gap: '4px',
              overflow: 'hidden',
            }}
          >
            {/* Visualizer bars */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: visualizerColor,
                  borderRadius: '2px 2px 0 0',
                  boxShadow: `0 0 8px ${visualizerColor}40`,
                  animation: `visualizerPulse${i % 3} 1.${5 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Channel info */}
        {channelInfo && (
          <>
            <Divider />
            <Line smoke style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
              {channelInfo.description}
            </Line>
          </>
        )}
      </div>

      {/* CSS animations for visualizer */}
      <style>{`
        @keyframes visualizerPulse0 {
          0%, 100% { height: 15%; }
          50% { height: 75%; }
        }

        @keyframes visualizerPulse1 {
          0%, 100% { height: 25%; }
          50% { height: 85%; }
        }

        @keyframes visualizerPulse2 {
          0%, 100% { height: 20%; }
          50% { height: 65%; }
        }
      `}</style>
    </div>
  );
}
