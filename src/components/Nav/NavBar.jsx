import { Nav, NavRow, NavItem, NavDivider } from './NavBar.styles';

// Reading pages, then a divider, then the tools used during play.
const NAV_LINKS = [
  { to: '/', label: 'CY_', end: true },
  { to: '/artwork', label: 'Artwork' },
  { divider: true },
  { to: '/punks', label: 'Punks' },
  { to: '/combat', label: 'Combat' },
  { to: '/market', label: 'Market' },
  { to: '/retcom', label: 'RetCom' },
  { to: '/netlog', label: 'Net Log' },
];

export default function NavBar() {
  return (
    <Nav>
      <NavRow>
        {NAV_LINKS.map((link, i) =>
          link.divider ? (
            <NavDivider key={`divider-${i}`} aria-hidden="true" />
          ) : (
            <NavItem key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavItem>
          )
        )}
      </NavRow>
    </Nav>
  );
}
