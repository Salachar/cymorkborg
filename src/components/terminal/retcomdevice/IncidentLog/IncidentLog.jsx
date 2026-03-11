import {
  Line,
  InsetBox,
} from '@terminal/TerminalComponents';

export default function IncidentLog({
  incidents = [],
  title = "INCIDENT LOG",
  timeframe = "Recent activity",
  children,
}) {
  if (incidents.length === 0) {
    return (
      <>
        <Line smoke large bold>[{title}]</Line>
        <Line yellow>No incidents recorded</Line>
      </>
    );
  }

  const getTypeColor = (type) => {
    const lowercaseType = type.toLowerCase();
    if (lowercaseType.includes('fatal') || lowercaseType.includes('critical')) return 'red';
    if (lowercaseType.includes('warning') || lowercaseType.includes('alert')) return 'yellow';
    return 'neon';
  };

  return (
    <>
      <Line smoke large bold>[{title}]</Line>
      <Line cyan>{timeframe}</Line>
      {incidents.map((incident, idx) => (
        <InsetBox key={`key_inc_log_${idx}`} title={incident.timestamp} color="yellow">
          <Line className={getTypeColor(incident.type)} cyan>
            Incident Type: {incident.type}
          </Line>
          {Object.entries(incident.details).map(([key, value], detailIdx) => (
            <Line key={detailIdx} smoke>
              {key}: {value}
            </Line>
          ))}
        </InsetBox>
      ))}
      {Boolean(children) && children}
    </>
  );
}
