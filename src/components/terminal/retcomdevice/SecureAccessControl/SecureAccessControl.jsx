import { Line, Divider, DataTable, Section } from '@terminal/TerminalComponents';

// ============================================================================
// BIOMETRIC LOG — named export, usable standalone or as Camera child
// ============================================================================

export function BiometricLog({ confidence, scans = [] }) {
  const recentFailures = scans.filter(s => s.result === 'FAILED').length;
  const systemStatus = recentFailures > 3 ? 'DEGRADED' : 'OPERATIONAL';

  const getScanBg = (result) => {
    if (result === 'MATCHED') return 'rgba(0, 170, 40, 0.1)';
    if (result === 'OVERRIDE') return 'rgba(250, 204, 21, 0.1)';
    if (result === 'PARTIAL') return 'rgba(79, 209, 197, 0.1)';
    return 'rgba(239, 68, 68, 0.1)';
  };

  const getScanBorder = (result) => {
    if (result === 'MATCHED') return 'rgba(0, 170, 40, 0.3)';
    if (result === 'OVERRIDE') return 'rgba(250, 204, 21, 0.3)';
    if (result === 'PARTIAL') return 'rgba(79, 209, 197, 0.3)';
    return 'rgba(239, 68, 68, 0.3)';
  };

  const getScanColor = (result) => {
    if (result === 'MATCHED') return 'rgb(0, 170, 40)';
    if (result === 'OVERRIDE') return 'rgb(250, 204, 21)';
    if (result === 'PARTIAL') return 'rgb(79, 209, 197)';
    return 'rgb(239, 68, 68)';
  };

  return (
    <>
      {confidence && (
        <DataTable
          data={[
            { label: 'Confidence Threshold', value: confidence },
            { label: 'Total Scans (24h)', value: scans.length.toString() },
            { label: 'Recent Failures', value: recentFailures.toString() },
            { label: 'System Status', value: systemStatus },
          ]}
        />
      )}

      {scans.length > 0 && (
        <Section title="RECOGNITION LOG:" color="yellow">
          {scans.map((scan, i) => (
            <div
              key={i}
              style={{
                marginBottom: '1rem',
                padding: '0.75rem',
                backgroundColor: getScanBg(scan.result),
                border: `1px solid ${getScanBorder(scan.result)}`,
                borderRadius: '3px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Line smoke bold>{scan.timestamp}</Line>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: getScanColor(scan.result),
                  fontFamily: 'monospace',
                }}>
                  [{scan.result}]
                </span>
              </div>

              {scan.source && (
                <Line smoke style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Source: {scan.source}
                </Line>
              )}

              {scan.name && (
                <Line
                  yellow={scan.result === 'MATCHED' || scan.result === 'OVERRIDE'}
                  cyan={scan.result === 'PARTIAL'}
                  style={{ marginTop: '0.5rem', fontWeight: 'bold' }}
                >
                  {`>>`} {scan.result === 'OVERRIDE' ? 'Manual ID: ' : ''}{scan.name}
                </Line>
              )}

              {scan.confidence && (
                <Line
                  neon={scan.confidence >= 85}
                  yellow={scan.confidence >= 50 && scan.confidence < 85}
                  red={scan.confidence < 50}
                  style={{ fontSize: '0.875rem' }}
                >
                  Match Confidence: {scan.confidence}%
                </Line>
              )}

              {scan.details && (
                <Line smoke style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {scan.details}
                </Line>
              )}

              {scan.notes && (
                <Line
                  red={scan.notes.includes('DETAINED') || scan.notes.includes('FLAGGED')}
                  yellow={
                    !scan.notes.includes('DETAINED') && !scan.notes.includes('FLAGGED') &&
                    (scan.notes.includes('WARNING') || scan.notes.includes('ALERT'))
                  }
                  cyan={
                    !scan.notes.includes('DETAINED') && !scan.notes.includes('FLAGGED') &&
                    !scan.notes.includes('WARNING') && !scan.notes.includes('ALERT')
                  }
                  style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontStyle: 'italic' }}
                >
                  Notes: {scan.notes}
                </Line>
              )}
            </div>
          ))}
        </Section>
      )}

      {scans.length === 0 && (
        <>
          <Divider />
          <Line yellow>No recent recognition attempts logged.</Line>
        </>
      )}
    </>
  );
}

// ============================================================================
// SECURE ACCESS CONTROL — default export
// ============================================================================

export default function SecureAccessControl({
  id,
  systemName = "SECURE ACCESS CONTROL",
  location,
  systemVersion = "v4.2.1",
  lastUpdate,
  accessPoints = [],
  confidence,
  scans = [],
}) {
  const isBiometric = Boolean(confidence || scans.length);

  const highSecurityPoints = accessPoints.filter(
    ap => ap.security && (ap.security.includes('BIOMETRIC') || ap.security.includes('RETINAL'))
  ).length;
  const overrides = accessPoints.filter(ap => ap.status === 'OVERRIDE').length;
  const sealed = accessPoints.filter(ap => ap.status === 'SEALED').length;

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(250, 204, 21)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ position: 'relative', width: '20px', height: '24px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '20px', height: '24px', border: '2px solid rgb(250, 204, 21)', borderRadius: '3px 3px 10px 10px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)' }} />
            <div style={{ position: 'absolute', top: '8px', left: '7px', width: '6px', height: '6px', border: '2px solid rgb(250, 204, 21)', borderBottom: 'none', borderRadius: '3px 3px 0 0' }} />
            <div style={{ position: 'absolute', top: '13px', left: '6px', width: '8px', height: '6px', backgroundColor: 'rgb(250, 204, 21)', borderRadius: '1px' }} />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [{systemName}]
          </Line>

          {!isBiometric && (overrides > 0 || sealed > 0) && (
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: sealed > 0 ? 'rgb(239, 68, 68)' : 'rgb(250, 204, 21)', fontFamily: 'monospace' }}>
              {sealed > 0 ? '[SEALED]' : '[OVERRIDE]'}
            </div>
          )}
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        <DataTable
          data={[
            { label: 'System Version', value: systemVersion },
            { label: 'Last Update', value: lastUpdate },
            ...(!isBiometric ? [
              { label: 'Access Points', value: accessPoints.length.toString() },
              { label: 'High Security', value: highSecurityPoints.toString() },
              { label: 'Active Overrides', value: overrides.toString() },
            ] : []),
          ]}
        />

        {/* Access points */}
        {accessPoints.length > 0 && (
          <>
            <Divider />
            <Section title="ACCESS POINTS:" color="yellow">
              {accessPoints.map((point, i) => {
                const hasFlags = point.flags && point.flags.length > 0;
                const isUnusual =
                  point.status === 'OVERRIDE' || point.status === 'SEALED' || hasFlags ||
                  (point.security && (point.security.includes('BIOMETRIC') || point.security.includes('RETINAL')));

                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: '1rem', padding: '0.75rem',
                      backgroundColor: isUnusual ? 'rgba(250, 204, 21, 0.1)' : 'rgba(79, 209, 197, 0.05)',
                      border: `1px solid ${
                        point.status === 'SEALED' ? 'rgba(239, 68, 68, 0.3)'
                        : point.status === 'OVERRIDE' ? 'rgba(250, 204, 21, 0.3)'
                        : isUnusual ? 'rgba(250, 204, 21, 0.2)'
                        : 'rgba(79, 209, 197, 0.2)'
                      }`,
                      borderRadius: '3px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Line yellow bold style={{ fontSize: '1rem' }}>{point.name}</Line>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 'bold',
                        color:
                          point.status === 'SEALED' ? 'rgb(239, 68, 68)'
                          : point.status === 'OVERRIDE' ? 'rgb(250, 204, 21)'
                          : point.status === 'UNLOCKED' ? 'rgb(0, 170, 40)'
                          : 'rgb(79, 209, 197)',
                        fontFamily: 'monospace',
                      }}>
                        [{point.status}]
                      </span>
                    </div>

                    <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      <Line
                        cyan={!point.security || (!point.security.includes('BIOMETRIC') && !point.security.includes('RETINAL'))}
                        yellow={point.security && (point.security.includes('BIOMETRIC') || point.security.includes('RETINAL'))}
                        bold={point.security && (point.security.includes('BIOMETRIC') || point.security.includes('RETINAL'))}
                      >
                        Security: {point.security || 'STANDARD'}
                      </Line>
                      {point.authorized && <Line smoke>Authorized: {point.authorized}</Line>}
                      {point.lastAccess && <Line smoke>Last Access: {point.lastAccess}</Line>}
                      {point.accessCount !== undefined && <Line smoke>Access Count (24h): {point.accessCount}</Line>}
                    </div>

                    {hasFlags && (
                      <div style={{ marginTop: '0.75rem' }}>
                        {point.flags.map((flag, fi) => (
                          <div
                            key={fi}
                            style={{
                              display: 'inline-block', marginRight: '0.5rem', marginBottom: '0.25rem',
                              padding: '0.25rem 0.5rem',
                              backgroundColor:
                                flag.includes('ENHANCED') || flag.includes('ADDITIONAL') ? 'rgba(250, 204, 21, 0.2)'
                                : flag.includes('OVERRIDE') || flag.includes('RECENT') ? 'rgba(239, 68, 68, 0.2)'
                                : 'rgba(79, 209, 197, 0.2)',
                              border: `1px solid ${
                                flag.includes('ENHANCED') || flag.includes('ADDITIONAL') ? 'rgba(250, 204, 21, 0.4)'
                                : flag.includes('OVERRIDE') || flag.includes('RECENT') ? 'rgba(239, 68, 68, 0.4)'
                                : 'rgba(79, 209, 197, 0.4)'
                              }`,
                              borderRadius: '3px', fontSize: '0.75rem', fontWeight: 'bold',
                              color:
                                flag.includes('ENHANCED') || flag.includes('ADDITIONAL') ? 'rgb(250, 204, 21)'
                                : flag.includes('OVERRIDE') || flag.includes('RECENT') ? 'rgb(239, 68, 68)'
                                : 'rgb(79, 209, 197)',
                              fontFamily: 'monospace',
                            }}
                          >
                            {flag}
                          </div>
                        ))}
                      </div>
                    )}

                    {point.notes && (
                      <Line
                        red={point.notes.includes('DETAINED') || point.notes.includes('RESTRICTED')}
                        yellow={
                          !point.notes.includes('DETAINED') && !point.notes.includes('RESTRICTED') &&
                          (point.notes.includes('CAUTION') || point.notes.includes('WARNING'))
                        }
                        cyan={
                          !point.notes.includes('DETAINED') && !point.notes.includes('RESTRICTED') &&
                          !point.notes.includes('CAUTION') && !point.notes.includes('WARNING')
                        }
                        style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontStyle: 'italic' }}
                      >
                        Notes: {point.notes}
                      </Line>
                    )}
                  </div>
                );
              })}
            </Section>
          </>
        )}

        {accessPoints.length === 0 && !isBiometric && (
          <>
            <Divider />
            <Line yellow>No access points configured.</Line>
          </>
        )}

        {/* Biometric log */}
        {isBiometric && (
          <>
            <Divider />
            <BiometricLog confidence={confidence} scans={scans} />
          </>
        )}
      </div>
    </div>
  );
}
