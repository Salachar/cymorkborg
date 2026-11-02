import {
  Page,
  PageHeader,
  Section,
  LoreSection,
  Directory,
  InsetPanel,
  Callout,
  Lead,
  Em,
  Intel,
} from '@components/Layout/Layout';

import {
  Sign,
  SignLine,
  DossierGrid,
  Dossier,
  DossierName,
  DossierTagline,
  DossierIntel,
} from './CyCity.styles';

import ChromeBar from '@components/Chrome/ChromeBar';

const MANTRA = [
  'Everyone is interfaced/injected/infected/infested with something.',
  'Everyone wants something from everyone else.',
  'Everyone is a liar and a cheat.',
  'Everyone wants more creds. ¤¤¤¤',
];

const CORPS = [
  {
    name: 'Alliansen Inc.',
    tagline: 'Real estate. Security. Your vote.',
    detail: 'They own the prisons. They own the polls. At war with UCS.',
  },
  {
    name: 'Spectral FT',
    tagline: 'Banking. Divine uploads.',
    detail: 'The Neon Pillar promises eternal life in the cloud. Results questionable.',
  },
  {
    name: 'UCS',
    tagline: 'United Citadel Security',
    detail: "Private military. Weapontech. Most of Cy's cops work for them.",
  },
  {
    name: 'ACGS',
    tagline: 'AI. Weapons. Insurance.',
    detail: "The Hermit — first 'true' AI — runs their vehicle grid.",
  },
  {
    name: 'Kaytell Makers',
    tagline: 'Materials. Production. Flesh.',
    detail: 'Rumor: CEO has run the corp for 150 years.',
  },
  {
    name: 'Heirs of Kergoz',
    tagline: 'Nano worship. Death cult.',
    detail: 'Not a corp. A horde. They serve the two-headed daemon.',
  },
];

const DISTRICTS = [
  {
    label: 'Central',
    description: 'Corporate towers. Neon. Coffin apartments. The Neon Pillar promises eternal uploads.',
  },
  {
    label: 'The Ports',
    description: 'Black market. Hedonism. Gunfights drowned by bass. Royal West owns the biggest warehouses.',
  },
  {
    label: 'The Slums',
    description: 'Gangs. Cults. Honest people with no hope. Virid Vipers vs Heirs of Kergoz in endless war.',
  },
  {
    label: 'Mosscroft',
    description: "Industrial hellscape. Toxic smog. Worker drones. Kaytell Makers' chemical plants.",
  },
  {
    label: 'The Hills',
    description: 'Gated luxury. Panopticon surveillance. Old money. Where the CEOs live.',
  },
  {
    label: 'The Inbetweens',
    description: 'Salaryfolk. Cubicle zombies. Bland tenement slabs under endless ads.',
  },
];

export default function Home() {
  return (
    <>
      <ChromeBar />
      <Page>
        <PageHeader title="Welcome to 20X3_">
          <p>
            Constantly in flux; shifting, distorting, always reborn as something worse. Destruction by ecological catastrophes, the fallout of history's belligerence; by modern man-made Miseries or the blood spilled by the reckless machine of capitalist supremacy. Mankind's greatest ability truly is to destroy itself in creative ways. Designer demise, consumer-customized death, endlessly on repeat.
          </p>
          <p>
            Poisonous space rocks, nuclear weapons, cyclical revolutions, warring nations, warring corporations, warring neighbors; pandemics, tsunamis, volcanoes. In between it all: direct person-machine interfaces, tactical neural implants, and bacteria from outer space intercellular nanorobotics. And the sky is full of ads.
          </p>
        </PageHeader>

        <Sign>
          {MANTRA.map((line) => (
            <SignLine key={line}>{line}</SignLine>
          ))}
        </Sign>

        <Callout title="Rule #00">
          <p>
            Player Characters <Em>cannot</Em> be loyal to or have sympathy for the corps, the cops, or the capitalist system. You might be forced to do missions for them. But make no mistake — <Em>they are the enemy</Em>.
          </p>
        </Callout>

        <LoreSection title="Retinal Com Device (RCD)">
          <Lead>Your interface with technology.</Lead>
          <p>
            Lifelike eyes, chromed-out headsets, neural ports and everything in between. Everyone has one. You can't function in Cy without it.
          </p>
          <p>
            The RCD beams holodata directly into your skull—ads, propaganda, the Net itself. Access sites, send and receive texts, pics, video feeds. Make calls, transfer creds, stream content, navigate the city. It's all there, always on, always watching.
          </p>
          <p>
            The shallow levels of the Net are accessible to anyone with an RCD. Social feeds, corporate storefronts, entertainment streams, government propaganda—a constant barrage of sensory input that most people can't imagine living without.
          </p>
          <p>
            Some go deeper. With a cyberdeck and the right Apps, you can affect meatspace itself—hack cameras, open doors, disable security. But that requires hardware most people will never afford.
          </p>
          <Intel>
            <p>
              Like everything in Cy, it can be hacked. Your thoughts, your location, your secrets—all vulnerable to anyone with the skills and motivation to take them.
            </p>
          </Intel>
        </LoreSection>

        <LoreSection title="G0 [Ground Zero]">
          <Lead>This is where the rock fell, where the bombs dropped.</Lead>
          <p>
            A post-apocalyptic quagmire kept in quarantine by a massive wall monitored by auto-turrets and armed drones.
          </p>
          <p>
            Entering the sector without proper protection is still a death sentence—if the murderous Nanophreaks, pockets of nerve gas or radioactive space dust don't kill you, then whatever the hell makes <Em>THAT NOISE</Em> at night will.
          </p>
          <p>
            Most of the area is waterlogged scrap and warped steel, but some of the oldest, medieval parts of Cy still stand.
          </p>
          <p>
            Scrapheads looking for antique junk, smugglers running goods, cultists seeking their profane truth and scientists looking for a way to profiteer from the fallout are the only beings you'll meet here. The only humans, that is.
          </p>
          <Intel>
            <p>
              One of the doors on the G0 bulwark is said to lead to the underground killclub/music venue called My Wall. Secret societies like the Terpischore Sisters are said to frequent it, using it as a forward base for their enclave deep beneath Old Cy.
            </p>
          </Intel>
        </LoreSection>

        <LoreSection title="The Net">
          <p>
            With its roots in primitive games and military experimentation with cranial jacks, the Net is a <Em>consensual semihallucination</Em> continuously experienced by almost everyone.
          </p>
          <p>A fractal amalgamation of AR, VR, old internet and cyberspace.</p>
          <Lead>The Net is an omnipresent deity; it is everywhere, in everything, in everyone.</Lead>
          <p>
            Impossible to map or escape. Always trying to sell you something, keep you scared and hack your behaviour.
          </p>
          <p>
            With a Retinal Communication Device, anyone can access the top, shallow levels. Venturing deeper, beyond consumer access zones, requires a <Em>cyberdeck</Em>, and to affect your immediate meatspace surroundings, you also need the proper <Em>Apps</Em>.
          </p>
          <p>
            Going deep requires mental resilience. To dive into unthinkable complexity, among lines of light in the dark of the mind.
          </p>
          <p>Getting black-iced is allegedly the worst way to die. But such warnings lack imagination.</p>
          <Intel>
            <p>
              Hacker collectives whisper of strange anomalies and enigmatic, nightmarish manifestations hiding in the deepest, darkest data chasms.
            </p>
            <p>
              They could only be born by one or multiple sentient entities of terrible, science-defying power: <Em>AI. Gods. Demons. Aliens. Basilisks.</Em>
            </p>
          </Intel>
        </LoreSection>

        <LoreSection title="Beyond the City">
          <Lead>The negaCity devours all it sees.</Lead>
          <p>
            It fracks and churns the earth, it boils the ocean barren, it cages the natural world in its drug fueled, over-bloated factory meat farms.
          </p>
          <p>
            Beyond the city limits are fields upon electrified fields for automated agricultural machines the size of cathedrals.
          </p>
          <p>
            What few forests remain are dominated by armies of buzzing, sawing, burning clearcutter drones that could not care less for what or who they cut down.
          </p>
          <InsetPanel title="Tomb Towns">
            <p>
              The wreckage of cities, ruined and abandoned during the last mega-urbanization wave. Here, roadrunner clans shelter from pollution, radiation, twisted wildlife, extreme weather and other, more unexplainable phenomena.
            </p>
          </InsetPanel>
        </LoreSection>

        <Section title="The Megacorps [The Enemy]">
          <DossierGrid>
            {CORPS.map((corp) => (
              <Dossier key={corp.name}>
                <DossierName>{corp.name}</DossierName>
                <DossierTagline>{corp.tagline}</DossierTagline>
                <DossierIntel>{corp.detail}</DossierIntel>
              </Dossier>
            ))}
          </DossierGrid>
        </Section>

        <Section title="The City of Cy">
          <Directory items={DISTRICTS} />
        </Section>
      </Page>
    </>
  );
}
