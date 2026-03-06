import { Line, Divider } from '@terminal/TerminalComponents';
import './cyWeather.css';

export default function CyWeather() {
  // Simulated data - could be randomized/dynamic
  const weatherData = {
    temp: 18,
    humidity: 67,
    wind: 12,
    aqi: 387,
    pm25: 421,
    visibility: 120,
    acidRain: 40,
    smogLevel: 'SEVERE',
    regions: [
      { name: 'Central', visibility: 150, status: 'hazardous', color: '#f59e0b' },
      { name: 'Ports', visibility: 120, status: 'hazardous', color: '#ef4444' },
      { name: 'Mosscroft', visibility: 50, status: 'critical', color: '#dc2626' },
      { name: 'Slums', visibility: 75, status: 'hazardous', color: '#f97316' },
      { name: 'The Hills', visibility: 320, status: 'moderate', color: '#10b981' },
    ],
    hourlyForecast: [
      { hour: '20:00', aqi: 395, icon: '💀' },
      { hour: '21:00', aqi: 410, icon: '💀' },
      { hour: '22:00', aqi: 425, icon: '☠️' },
      { hour: '23:00', aqi: 401, icon: '💀' },
      { hour: '00:00', aqi: 385, icon: '💀' },
    ],
  };

  const getAQIColor = (aqi) => {
    if (aqi >= 400) return '#dc2626'; // Critical
    if (aqi >= 300) return '#ef4444'; // Hazardous
    if (aqi >= 200) return '#f59e0b'; // Very Unhealthy
    if (aqi >= 100) return '#fbbf24'; // Unhealthy
    return '#10b981'; // Moderate
  };

  const getAQILabel = (aqi) => {
    if (aqi >= 400) return 'CRITICAL';
    if (aqi >= 300) return 'HAZARDOUS';
    if (aqi >= 200) return 'VERY UNHEALTHY';
    if (aqi >= 100) return 'UNHEALTHY';
    return 'MODERATE';
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(100, 116, 139)',
          borderRadius: '4px',
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'rgb(51, 65, 85)',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgb(100, 116, 139)',
          }}
        >
          <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
            CYWEATHER™
          </Line>
          <Line smoke large bold style={{ margin: 0 }}>
            [AIR QUALITY MONITOR]
          </Line>
          <Line smoke style={{ margin: 0, fontSize: '0.65rem', marginTop: '0.25rem' }}>
            Brought to you by Kaytell Environmental
          </Line>
        </div>

        <div style={{ padding: '1rem' }}>
          {/* Current conditions */}
          <div style={{ marginBottom: '1rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              {/* Temperature and basic conditions */}
              <div>
                <div
                  style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: 'rgb(226, 232, 240)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                    fontFamily: 'monospace',
                  }}
                >
                  {weatherData.temp}°
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '0.5rem 1rem',
                  }}
                >
                  <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                    HUMIDITY:
                  </Line>
                  <Line cyan style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                    {weatherData.humidity}%
                  </Line>

                  <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                    WIND:
                  </Line>
                  <Line cyan style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                    {weatherData.wind} km/h
                  </Line>

                  <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                    VISIBILITY:
                  </Line>
                  <Line yellow style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                    {weatherData.visibility}m
                  </Line>
                </div>
              </div>

              {/* AQI Alert */}
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: `${getAQIColor(weatherData.aqi)}15`,
                  border: `2px solid ${getAQIColor(weatherData.aqi)}`,
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      color: getAQIColor(weatherData.aqi),
                      lineHeight: 1,
                      fontFamily: 'monospace',
                    }}
                  >
                    {weatherData.aqi}
                  </div>
                  <div>
                    <Line
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        color: getAQIColor(weatherData.aqi),
                      }}
                    >
                      {getAQILabel(weatherData.aqi)}
                    </Line>
                    <Line smoke style={{ margin: 0, fontSize: '0.7rem', marginTop: '0.25rem' }}>
                      AIR QUALITY INDEX
                    </Line>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Line smoke style={{ margin: 0, fontSize: '0.75rem' }}>
                    PM2.5: {weatherData.pm25} µg/m³
                  </Line>
                  <Line smoke style={{ margin: 0, fontSize: '0.75rem' }}>
                    Acid Rain: {weatherData.acidRain}%
                  </Line>
                </div>
              </div>
            </div>
          </div>

          {/* Hourly forecast */}
          <div style={{ marginBottom: '1rem' }}>
            <Line cyan bold style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              NEXT 5 HOURS
            </Line>
            <Divider />
            <div className="cy-weather-hourly-grid" style={{ marginTop: '0.75rem' }}>
              {weatherData.hourlyForecast.map((hour, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgb(71, 85, 105)',
                    borderRadius: '3px',
                    textAlign: 'center',
                  }}
                >
                  <Line smoke style={{ margin: 0, fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    {hour.hour}
                  </Line>
                  <div style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>
                    {hour.icon}
                  </div>
                  <Line
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      color: getAQIColor(hour.aqi),
                    }}
                  >
                    {hour.aqi}
                  </Line>
                </div>
              ))}
            </div>
          </div>

          {/* District conditions */}
          <div style={{ marginBottom: '1rem' }}>
            <Line cyan bold style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              DISTRICT CONDITIONS
            </Line>
            <Divider />
            <div style={{ marginTop: '0.75rem' }}>
              {weatherData.regions.map((region, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgb(71, 85, 105)',
                    borderLeft: `3px solid ${region.color}`,
                    borderRadius: '3px',
                    marginBottom: idx < weatherData.regions.length - 1 ? '0.5rem' : '0',
                  }}
                >
                  <Line cyan style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                    {region.name}
                  </Line>
                  <Line smoke style={{ margin: 0, fontSize: '0.875rem' }}>
                    {region.visibility}m visibility
                  </Line>
                  <Line
                    style={{
                      margin: 0,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: region.color,
                    }}
                  >
                    {region.status.toUpperCase()}
                  </Line>
                </div>
              ))}
            </div>
          </div>

          {/* Warning banner */}
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '3px',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <span className="cy-weather-warning-icon">⚠️</span>
              <Line red style={{ margin: 0, fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }}>
                OUTDOOR ACTIVITY NOT RECOMMENDED WITHOUT PROTECTION
              </Line>
              <span className="cy-weather-warning-icon">⚠️</span>
            </div>
          </div>

          {/* Ad footer */}
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '3px',
              textAlign: 'center',
            }}
          >
            <Line cyan style={{ margin: 0, fontSize: '0.75rem', fontStyle: 'italic' }}>
              "Breathe easy with <strong>Kaytell Air™</strong> Filtration Systems"
            </Line>
          </div>
        </div>
      </div>
    </div>
  );
}
