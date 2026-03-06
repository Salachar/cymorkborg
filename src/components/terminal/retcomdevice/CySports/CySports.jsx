import { Line, Divider } from '@terminal/TerminalComponents';
import './cySports.css';

/**
 * CySports - Live Blood Bowl coverage
 *
 * Corporate-sponsored ultraviolent sports entertainment.
 * Features Blood Bowl leagues, matches, and mayhem.
 */
export default function CySports() {
  const sportsData = {
    featured: {
      league: 'CY BLOOD BOWL CHAMPIONSHIP',
      home: 'Central Cyborgs',
      away: 'Scargag Snivellers',
      homeScore: 2,
      awayScore: 1,
      status: 'TURN 12 - 2ND HALF',
      casualties: { home: 3, away: 5 },
      sponsor: 'KILLTECH™',
    },
    liveGames: [
      {
        home: 'Mosscroft Mutants',
        away: 'Port Reavers',
        homeScore: 1,
        awayScore: 2,
        turn: 'TURN 8',
        casualties: 6
      },
      {
        home: 'Slum Scrappers',
        away: 'Hills Highborn',
        homeScore: 0,
        awayScore: 0,
        turn: 'TURN 5',
        casualties: 2
      },
      {
        home: 'Kaytell Killers',
        away: 'NeoTech Knights',
        homeScore: 3,
        awayScore: 1,
        turn: 'HALFTIME',
        casualties: 4
      },
    ],
    headlines: [
      { title: 'Scargag Snivellers Goblin Thrown Out of Stadium - Lands in Canal', category: 'INJURY', time: '12m' },
      { title: 'Central Cyborgs Star Blitzer Kills Opposing Lineman - No Foul Called', category: 'FATAL', time: '45m' },
      { title: 'Mosscroft Accused of Using Illegal Mutations', category: 'SCANDAL', time: '1h' },
      { title: 'Referee Hospitalized After "Accidental" Tackle', category: 'INJURY', time: '3h' },
    ],
    standings: [
      { team: 'Central Cyborgs', w: 12, l: 2, td: 38, cas: 47 },
      { team: 'Kaytell Killers', w: 10, l: 4, td: 32, cas: 41 },
      { team: 'Mosscroft Mutants', w: 9, l: 5, td: 29, cas: 62 },
      { team: 'Scargag Snivellers', w: 6, l: 8, td: 18, cas: 38 },
      { team: 'Port Reavers', w: 4, l: 10, td: 15, cas: 29 },
    ],
  };

  // Blood Bowl spiked ball icon component
  const BloodBowlIcon = () => (
    <div className="bloodbowl-icon">
      <div className="bb-spike bb-spike-top"></div>
      <div className="bb-spike bb-spike-left"></div>
      <div className="bb-spike bb-spike-right"></div>
      <div className="bb-ball"></div>
      <div className="bb-spike bb-spike-bottom"></div>
    </div>
  );

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
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <BloodBowlIcon />
          <div style={{ flex: 1 }}>
            <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
              CYSPORTS LIVE
            </Line>
            <Line smoke large bold style={{ margin: 0 }}>
              [BLOOD BOWL COVERAGE]
            </Line>
          </div>

          {/* Live indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="cy-sports-live-dot" />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'rgb(239, 68, 68)',
                fontFamily: 'monospace',
              }}
            >
              LIVE
            </span>
          </div>
        </div>

        <div style={{ padding: '1rem' }}>
          {/* Featured game */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              borderRadius: '4px',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <Line red style={{ margin: 0, fontSize: '0.75rem', fontWeight: 'bold' }}>
                ⭐ FEATURED MATCH
              </Line>
              <Line smoke style={{ margin: 0, fontSize: '0.7rem' }}>
                {sportsData.featured.league}
              </Line>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Line style={{ margin: 0, fontSize: '0.875rem', fontWeight: 'bold', color: 'rgb(226, 232, 240)' }}>
                  {sportsData.featured.home}
                </Line>
                <Line red style={{ margin: 0, fontSize: '0.7rem', marginTop: '0.25rem' }}>
                  {sportsData.featured.casualties.home} CAS
                </Line>
              </div>

              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'rgb(251, 191, 36)',
                  fontFamily: 'monospace',
                  padding: '0 1rem',
                }}
              >
                {sportsData.featured.homeScore} - {sportsData.featured.awayScore}
              </div>

              <div style={{ flex: 1, textAlign: 'center' }}>
                <Line style={{ margin: 0, fontSize: '0.875rem', fontWeight: 'bold', color: 'rgb(226, 232, 240)' }}>
                  {sportsData.featured.away}
                </Line>
                <Line red style={{ margin: 0, fontSize: '0.7rem', marginTop: '0.25rem' }}>
                  {sportsData.featured.casualties.away} CAS
                </Line>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Line yellow style={{ margin: 0, fontSize: '0.75rem' }}>
                {sportsData.featured.status}
              </Line>
              <Line smoke style={{ margin: 0, fontSize: '0.75rem' }}>
                Sponsored by {sportsData.featured.sponsor}
              </Line>
            </div>
          </div>

          {/* Live matches */}
          <div style={{ marginBottom: '1rem' }}>
            <Line cyan bold style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              LIVE MATCHES
            </Line>
            <Divider />
            <div style={{ marginTop: '0.75rem' }}>
              {sportsData.liveGames.map((game, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgb(71, 85, 105)',
                    borderRadius: '3px',
                    marginBottom: idx < sportsData.liveGames.length - 1 ? '0.5rem' : '0',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <Line cyan style={{ margin: 0, fontSize: '0.875rem' }}>
                      {game.home}
                    </Line>
                    <Line yellow style={{ margin: 0, fontSize: '0.875rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                      {game.homeScore} - {game.awayScore}
                    </Line>
                    <Line cyan style={{ margin: 0, fontSize: '0.875rem' }}>
                      {game.away}
                    </Line>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Line smoke style={{ margin: 0, fontSize: '0.75rem' }}>
                      {game.turn}
                    </Line>
                    <Line red style={{ margin: 0, fontSize: '0.75rem', fontWeight: 'bold' }}>
                      {game.casualties} casualties
                    </Line>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* League standings */}
          <div style={{ marginBottom: '1rem' }}>
            <Line cyan bold style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              LEAGUE STANDINGS
            </Line>
            <Divider />
            <div
              style={{
                marginTop: '0.75rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgb(71, 85, 105)',
                borderRadius: '3px',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  gap: '0.5rem',
                  paddingBottom: '0.5rem',
                  marginBottom: '0.5rem',
                  borderBottom: '1px solid rgb(71, 85, 105)',
                }}
              >
                <Line smoke style={{ margin: 0, fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.7 }}>
                  TEAM
                </Line>
                <Line smoke style={{ margin: 0, fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.7 }}>
                  W-L
                </Line>
                <Line smoke style={{ margin: 0, fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.7 }}>
                  TD
                </Line>
                <Line smoke style={{ margin: 0, fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.7 }}>
                  CAS
                </Line>
              </div>

              {/* Rows */}
              {sportsData.standings.map((team, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '0.5rem',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    borderBottom: idx < sportsData.standings.length - 1 ? '1px solid rgba(71, 85, 105, 0.5)' : 'none',
                  }}
                >
                  <Line cyan style={{ margin: 0, fontSize: '0.875rem' }}>
                    {team.team}
                  </Line>
                  <Line smoke style={{ margin: 0, fontSize: '0.875rem' }}>
                    {team.w}-{team.l}
                  </Line>
                  <Line yellow style={{ margin: 0, fontSize: '0.875rem' }}>
                    {team.td}
                  </Line>
                  <Line red style={{ margin: 0, fontSize: '0.875rem', fontWeight: 'bold' }}>
                    {team.cas}
                  </Line>
                </div>
              ))}
            </div>
          </div>

          {/* Headlines */}
          <div>
            <Line cyan bold style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              BREAKING NEWS
            </Line>
            <Divider />
            <div style={{ marginTop: '0.75rem' }}>
              {sportsData.headlines.map((headline, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgb(71, 85, 105)',
                    borderRadius: '3px',
                    marginBottom: idx < sportsData.headlines.length - 1 ? '0.5rem' : '0',
                  }}
                >
                  <span className={`cy-sports-headline-cat cy-sports-headline-cat-${headline.category.toLowerCase()}`}>
                    {headline.category}
                  </span>
                  <div style={{ flex: 1 }}>
                    <Line style={{ margin: 0, fontSize: '0.875rem', color: 'rgb(226, 232, 240)', marginBottom: '0.25rem' }}>
                      {headline.title}
                    </Line>
                    <Line smoke style={{ margin: 0, fontSize: '0.7rem' }}>
                      {headline.time} ago
                    </Line>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer disclaimer */}
          <Divider />
          <Line smoke style={{ fontSize: '0.7rem', marginTop: '0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
            Blood Bowl casualty statistics are estimates. CySports not responsible for accuracy. Viewer discretion advised.
          </Line>
        </div>
      </div>
    </div>
  );
}
