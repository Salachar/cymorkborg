import './hoursBanner.css';

/**
 * HoursBanner - Hours of operation display
 *
 * Props:
 * - name: String (e.g., "Cave Club")
 * - hours: String (e.g., "20:00 - 06:00")
 * - days: String (e.g., "Every Night", "Mon-Fri")
 * - status: String (e.g., "OPEN", "CLOSED")
 * - statusColor: String ("open" | "closed" | "warning")
 * - location: String (optional)
 * - note: String (optional)
 * - theme: String ("default" | "fancy")
 * - children: ReactNode (optional)
 */
export default function HoursBanner({
  name,
  hours,
  days = "Daily",
  status = "OPEN",
  statusColor = "open",
  location,
  note,
  theme = "default",
  children,
}) {
  const fancy = theme === "fancy";

  return (
    <div className={`hours-banner${fancy ? ' hours-banner-fancy' : ''}`}>

      {/* Header */}
      <div className="hours-banner-header">
        <div className="hours-banner-business">{name}</div>
        <div className={`hours-banner-status hours-banner-status-${statusColor}`}>
          {status}
        </div>
      </div>

      {/* Hours */}
      <div className="hours-banner-main">
        <div className="hours-banner-label">HOURS OF OPERATION</div>
        <div className="hours-banner-hours">{hours}</div>
        <div className="hours-banner-days">{days}</div>
      </div>

      {/* Location */}
      {location && (
        <div className="hours-banner-location">
          <span className="hours-banner-location-label">LOCATION:</span>
          <span>{location}</span>
        </div>
      )}

      {Boolean(children) && (
        <div style={{ margin: '0.75rem 0' }}>
          {children}
        </div>
      )}

      {/* Note */}
      {note && (
        <div className="hours-banner-note">
          {note}
        </div>
      )}

    </div>
  );
}
