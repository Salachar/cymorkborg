import {
  Line,
  Section,
  Spacer,
} from '@terminal/TerminalComponents';

export default function CityPortal({
  cityName = "CY",
  cityId = "MEGACITY-01",
  tagline,
  population,
  yearFounded,
  districts,
  majorThreats,
  threatLevel,
  atmosphere,
  children,
}) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Outer container with ominous glow */}
      <div
        style={{
          border: '3px solid rgba(239, 68, 68, 0.6)',
          borderRadius: '8px',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        />

        {/* Header section with scanning effect */}
        <div
          style={{
            padding: '1rem',
            borderBottom: '2px solid rgba(239, 68, 68, 0.3)',
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            position: 'relative',
          }}
        >
          {/* Scanning progress bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgb(239, 68, 68), transparent)',
              animation: 'cityScan 4s linear infinite',
            }}
          />

          {/* City name and ID */}
          <div style={{ marginBottom: '1rem' }}>
            <Line smoke style={{ fontSize: '0.875rem', margin: 0, opacity: 0.7 }}>
              CY_NET MEGACITY DATABASE
            </Line>
            <Line
              style={{
                fontSize: '2.2rem',
                fontWeight: 'bold',
                margin: 0,
                marginTop: '0.5rem',
                color: 'rgb(239, 68, 68)',
                textShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                letterSpacing: '0.1em',
              }}
            >
              {cityName}
            </Line>
            <Line smoke style={{ fontSize: '0.875rem', margin: 0, marginTop: '0.25rem' }}>
              [{cityId}]
            </Line>
          </div>

          {/* Tagline */}
          {tagline && (
            <Line
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                margin: 0,
                color: 'rgb(251, 191, 36)',
              }}
            >
              {tagline}
            </Line>
          )}


          {/* Quick stats grid */}
          {(population || yearFounded || threatLevel) && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              {population && (
                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '4px',
                  }}
                >
                  <Line smoke style={{ fontSize: '0.7rem', margin: 0, opacity: 0.7 }}>
                    POPULATION
                  </Line>
                  <Line red bold style={{ fontSize: '1rem', margin: 0 }}>
                    {population}
                  </Line>
                </div>
              )}

              {yearFounded && (
                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '4px',
                  }}
                >
                  <Line smoke style={{ fontSize: '0.7rem', margin: 0, opacity: 0.7 }}>
                    FOUNDED
                  </Line>
                  <Line red bold style={{ fontSize: '1rem', margin: 0 }}>
                    {yearFounded}
                  </Line>
                </div>
              )}

              {threatLevel && (
                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '4px',
                  }}
                >
                  <Line smoke style={{ fontSize: '0.7rem', margin: 0, opacity: 0.7 }}>
                    THREAT LEVEL
                  </Line>
                  <Line red bold style={{ fontSize: '1rem', margin: 0 }}>
                    {threatLevel}
                  </Line>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Main content */}
        <div style={{ padding: '1.5rem', position: 'relative' }}>
          {/* Atmosphere description */}
          {atmosphere && (
            <>
              <Section title="CITY OVERVIEW:">
                <Line
                  smoke
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                  }}
                >
                  {atmosphere}
                </Line>
              </Section>
              <Spacer />
            </>
          )}

          {/* Major districts */}
          {districts && districts.length > 0 && (
            <>
              <Section title="MAJOR DISTRICTS:">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {districts.map((district, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderLeft: '3px solid rgb(239, 68, 68)',
                        borderRadius: '4px',
                        transition: 'all 0.2s',
                      }}
                    >
                      <Line red bold style={{ margin: 0, fontSize: '1.1rem' }}>
                        {district.name}
                      </Line>
                      {district.description && (
                        <Line smoke style={{ margin: 0, marginTop: '0.5rem', fontSize: '0.875rem' }}>
                          {district.description}
                        </Line>
                      )}
                      {district.population && (
                        <Line yellow style={{ margin: 0, marginTop: '0.5rem', fontSize: '0.8rem' }}>
                          Population: {district.population}
                        </Line>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
              <Spacer />
            </>
          )}

          {/* Major threats */}
          {majorThreats && majorThreats.length > 0 && (
            <>
              <Section title="EXISTENTIAL THREATS:">
                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '2px solid rgba(239, 68, 68, 0.4)',
                    borderRadius: '4px',
                  }}
                >
                  {majorThreats.map((threat, i) => (
                    <Line
                      key={i}
                      red
                      bold
                      style={{
                        margin: 0,
                        marginTop: i > 0 ? '0.75rem' : 0,
                        fontSize: '0.9rem',
                      }}
                    >
                      • {threat}
                    </Line>
                  ))}
                </div>
              </Section>
              <Spacer />
            </>
          )}

          {/* Children content */}
          {children}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '1rem 2rem',
            borderTop: '2px solid rgba(239, 68, 68, 0.3)',
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            textAlign: 'center',
          }}
        >
          <Line
            red
            style={{
              fontSize: '0.8rem',
              margin: 0,
              fontWeight: 'bold',
              letterSpacing: '0.1em',
            }}
          >
            CY_NET CITY DATABASE v3.0.1 - UPDATED DAILY
          </Line>
          <Line smoke style={{ fontSize: '0.7rem', margin: 0, marginTop: '0.25rem' }}>
            Warning: City data may be incomplete, corrupted, or deliberately misleading
          </Line>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes cityPulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
          }
        }

        @keyframes cityScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
