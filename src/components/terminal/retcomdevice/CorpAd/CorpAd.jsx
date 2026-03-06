import React from 'react';

export default function CorpAd({
  corp,           // Corporation name
  slogan,         // Main slogan/tagline
  tagline,        // Secondary tagline (optional)
  products = [],  // Array of products/services
  cta,            // Call to action text (optional)
  theme = 'cyber', // Visual theme
  logo,           // Optional logo/symbol (emoji or text)
  children,       // Optional custom content (placed mid-section)
}) {
  // Theme configurations - flat, professional palettes
  const themes = {
    cyber: {
      bg: '#0a1628',
      border: '#00d9ff',
      accent: '#00d9ff',
      text: '#a0c4e0',
      textBright: '#ffffff',
    },
    corporate: {
      bg: '#0f1419',
      border: '#4a9fd8',
      accent: '#6bc9ff',
      text: '#8fa9c4',
      textBright: '#e0f0ff',
    },
    dystopian: {
      bg: '#1a0f0a',
      border: '#ff6b35',
      accent: '#ff8c42',
      text: '#d4a574',
      textBright: '#ffd93d',
    },
    sleek: {
      bg: '#0a0a0a',
      border: '#666666',
      accent: '#999999',
      text: '#cccccc',
      textBright: '#ffffff',
    },
    gold: {
      bg: '#1a1508',
      border: '#c9a961',
      accent: '#daa520',
      text: '#b8994d',
      textBright: '#ffd700',
    },
    purple: {
      bg: '#1a0a1f',
      border: '#9b59b6',
      accent: '#c77dff',
      text: '#b39ddb',
      textBright: '#e1bee7',
    },
    green: {
      bg: '#0a1a0f',
      border: '#10b981',
      accent: '#34d399',
      text: '#86efac',
      textBright: '#d1fae5',
    },
    neon: {
      bg: '#1a0a1f',
      border: '#ff006e',
      accent: '#ff006e',
      text: '#ff5d8f',
      textBright: '#ffb3d9',
    },
  };

  const t = themes[theme] || themes.cyber;

  return (
    <div style={{
      position: 'relative',
      backgroundColor: t.bg,
      border: `2px solid ${t.border}`,
      borderRadius: '4px',
      padding: '1.25rem 1.75rem',
      overflow: 'hidden',
      boxShadow: `0 2px 8px ${t.border}33`,
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '15%',
        right: '15%',
        height: '2px',
        backgroundColor: t.accent,
        opacity: 0.6,
      }} />

      {/* Left accent marker */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '30%',
        bottom: '30%',
        width: '3px',
        backgroundColor: t.accent,
      }} />

      {/* Content - horizontal layout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
      }}>
        {/* Logo (if provided) */}
        {logo && (
          <div style={{
            flexShrink: 0,
            fontSize: '2.5rem',
            opacity: 0.9,
          }}>
            {logo}
          </div>
        )}

        {/* Main content area */}
        <div style={{ flex: 1 }}>
          {/* Corporation name */}
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 900,
            color: t.textBright,
            marginBottom: '0.25rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            {corp}
          </h3>

          {/* Slogan */}
          {slogan && (
            <p style={{
              fontSize: '0.875rem',
              color: t.accent,
              fontStyle: 'italic',
              marginBottom: tagline || products.length > 0 ? '0.5rem' : 0,
            }}>
              "{slogan}"
            </p>
          )}

          {/* Tagline */}
          {tagline && (
            <p style={{
              fontSize: '0.75rem',
              color: t.text,
              marginBottom: products.length > 0 ? '0.5rem' : 0,
            }}>
              {tagline}
            </p>
          )}

          {/* Products - horizontal list for space efficiency */}
          {products.length > 0 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '0.5rem',
            }}>
              {products.slice(0, 4).map((product, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '0.7rem',
                    color: t.text,
                    padding: '0.2rem 0.5rem',
                    border: `1px solid ${t.border}`,
                    borderRadius: '2px',
                    backgroundColor: `${t.border}11`,
                  }}
                >
                  {product}
                </div>
              ))}
            </div>
          )}

          {/* Call to action */}
          {cta && (
            <div style={{
              marginTop: '0.75rem',
              fontSize: '0.75rem',
              color: t.accent,
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              {cta}
            </div>
          )}
        </div>
      </div>

      {/* Corner brackets (professional detail) */}
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        width: '12px',
        height: '12px',
        borderTop: `2px solid ${t.border}`,
        borderRight: `2px solid ${t.border}`,
        opacity: 0.5,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '8px',
        width: '12px',
        height: '12px',
        borderBottom: `2px solid ${t.border}`,
        borderLeft: `2px solid ${t.border}`,
        opacity: 0.5,
      }} />

      {Boolean(children) && (
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '1rem',
          borderRadius: '6px',
          margin: '1rem 2rem 0 2rem',
          fontSize: '0.875rem',
        }}>
          {children }
        </div>
      )}
    </div>
  );
}
