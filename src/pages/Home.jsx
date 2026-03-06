import {
  Page,
  PageHeader,
  PageBox,
  Callout,
} from "../components/PageComponents";

export default function Home() {
  return (
    <Page>
      <PageHeader title="CY_BORG" />

      <PageBox title="Welcome to 20X3_">
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Constantly in flux; shifting, distorting, always reborn as something worse. Destruction by ecological catastrophes, the fallout of history's belligerence; by modern man-made Miseries or the blood spilled by the reckless machine of capitalist supremacy. Mankind's greatest ability truly is to destroy itself in creative ways. Designer demise, consumer-customized death, endlessly on repeat.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Poisonous space rocks, nuclear weapons, cyclical revolutions, warring nations, warring corporations, warring neighbors; pandemics, tsunamis, volcanoes. In between it all: direct person-machine interfaces, tactical neural implants, and bacteria from outer space intercellular nanorobotics. And the sky is full of ads.
        </p>
        <p className="text-lg text-cy-yellow font-bold">
          Everyone is interfaced/injected/infected/infested with something. Everyone wants something from everyone else. Everyone is a liar and a cheat. Everyone wants more creds. ¤¤¤¤
        </p>
      </PageBox>

      {/* Rule Zero */}
      <Callout title="[RULE #00]">
        <p className="text-gray-300 leading-relaxed">
          Player Characters <span className="text-red-400 font-bold">cannot</span> be loyal to or have sympathy for the corps, the cops, or the capitalist system. You might be forced to do missions for them. But make no mistake — <span className="text-cy-yellow font-bold">they are the enemy</span>.
        </p>
      </Callout>

      {/* Retinal Com Device */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-cyan mb-6 uppercase border-b-2 border-cy-cyan pb-2">
          Retinal Com Device (RCD)
        </h2>
        <div className="bg-cy-cyan/10 border-l-4 border-cy-cyan p-6">
          <p className="text-lg text-cy-cyan font-bold mb-4">
            Your interface with technology.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Lifelike eyes, chromed-out headsets, neural ports and everything in between. Everyone has one. You can't function in Cy without it.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            The RCD beams holodata directly into your skull—ads, propaganda, the Net itself. Access sites, send and receive texts, pics, video feeds. Make calls, transfer creds, stream content, navigate the city. It's all there, always on, always watching.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            The shallow levels of the Net are accessible to anyone with an RCD. Social feeds, corporate storefronts, entertainment streams, government propaganda—a constant barrage of sensory input that most people can't imagine living without.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-4 italic">
            Some go deeper. With a cyberdeck and the right Apps, you can affect meatspace itself—hack cameras, open doors, disable security. But that requires hardware most people will never afford.
          </p>
          <p className="text-sm text-gray-500 italic">
            Like everything in Cy, it can be hacked. Your thoughts, your location, your secrets—all vulnerable to anyone with the skills and motivation to take them.
          </p>
        </div>
      </section>

      {/* G0 - Ground Zero */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-red-400 mb-6 uppercase border-b-2 border-red-400 pb-2">
          G0 [Ground Zero]
        </h2>
        <div className="bg-red-900/10 border-l-4 border-red-700 p-6">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <span className="text-red-400 font-bold">This is where the rock fell, where the bombs dropped.</span>
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            A post-apocalyptic quagmire kept in quarantine by a massive wall monitored by auto-turrets and armed drones.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Entering the sector without proper protection is still a death sentence—if the murderous Nanophreaks, pockets of nerve gas or radioactive space dust don't kill you, then whatever the hell makes <span className="text-red-400 font-bold">THAT NOISE</span> at night will.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Most of the area is waterlogged scrap and warped steel, but some of the oldest, medieval parts of Cy still stand.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-4">
            Scrapheads looking for antique junk, smugglers running goods, cultists seeking their profane truth and scientists looking for a way to profiteer from the fallout are the only beings you'll meet here. The only humans, that is.
          </p>
          <p className="text-sm text-cy-cyan italic">
            One of the doors on the G0 bulwark is said to lead to the underground killclub/music venue called My Wall. Secret societies like the Terpischore Sisters are said to frequent it, using it as a forward base for their enclave deep beneath Old Cy.
          </p>
        </div>
      </section>

      {/* The Net */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-cyan mb-6 uppercase border-b-2 border-cy-cyan pb-2">
          The Net
        </h2>
        <div className="bg-cy-cyan/10 border-l-4 border-cy-cyan p-6">
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            With its roots in primitive games and military experimentation with cranial jacks, the Net is a <span className="text-cy-cyan font-bold">consensual semihallucination</span> continuously experienced by almost everyone.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            A fractal amalgamation of AR, VR, old internet and cyberspace.
          </p>
          <p className="text-lg text-cy-cyan font-bold mb-4">
            The Net is an omnipresent deity; it is everywhere, in everything, in everyone.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Impossible to map or escape. Always trying to sell you something, keep you scared and hack your behaviour.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            With a Retinal Communication Device, anyone can access the top, shallow levels. Venturing deeper, beyond consumer access zones, requires a <span className="text-cy-yellow font-bold">cyberdeck</span>, and to affect your immediate meatspace surroundings, you also need the proper <span className="text-cy-yellow font-bold">Apps</span>.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-4">
            Going deep requires mental resilience. To dive into unthinkable complexity, among lines of light in the dark of the mind.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Getting black-iced is allegedly the worst way to die. But such warnings lack imagination.
          </p>
          <p className="text-sm text-gray-500 italic mb-4">
            Hacker collectives whisper of strange anomalies and enigmatic, nightmarish manifestations hiding in the deepest, darkest data chasms.
          </p>
          <p className="text-sm text-gray-500 italic">
            They could only be born by one or multiple sentient entities of terrible, science-defying power: <span className="text-red-400">AI. Gods. Demons. Aliens. Basilisks.</span>
          </p>
        </div>
      </section>

      {/* Beyond the City */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-yellow-600 mb-6 uppercase border-b-2 border-yellow-600 pb-2">
          Beyond the City
        </h2>
        <div className="bg-yellow-900/10 border-l-4 border-yellow-700 p-6">
          <p className="text-lg text-yellow-400 font-bold mb-4">
            The negaCity devours all it sees.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            It fracks and churns the earth, it boils the ocean barren, it cages the natural world in its drug fueled, over-bloated factory meat farms.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Beyond the city limits are fields upon electrified fields for automated agricultural machines the size of cathedrals.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            What few forests remain are dominated by armies of buzzing, sawing, burning clearcutter drones that could not care less for what or who they cut down.
          </p>

          <div className="bg-gray-900/50 border border-gray-700 p-4">
            <h3 className="text-lg font-bold text-yellow-400 mb-2 uppercase">Tomb Towns</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The wreckage of cities, ruined and abandoned during the last mega-urbanization wave. Here, roadrunner clans shelter from pollution, radiation, twisted wildlife, extreme weather and other, more unexplainable phenomena.
            </p>
          </div>
        </div>
      </section>

      {/* The Megacorps */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase border-b-2 border-cy-yellow pb-2">
          The Megacorps [The Enemy]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CorpCard
            name="ALLIANSEN INC."
            tagline="Real estate. Security. Your vote."
            detail="They own the prisons. They own the polls. At war with UCS."
          />
          <CorpCard
            name="SPECTRAL FT"
            tagline="Banking. Divine uploads."
            detail="The Neon Pillar promises eternal life in the cloud. Results questionable."
          />
          <CorpCard
            name="UCS"
            tagline="United Citadel Security"
            detail="Private military. Weapontech. Most of Cy's cops work for them."
          />
          <CorpCard
            name="ACGS"
            tagline="AI. Weapons. Insurance."
            detail="The Hermit — first 'true' AI — runs their vehicle grid."
          />
          <CorpCard
            name="KAYTELL MAKERS"
            tagline="Materials. Production. Flesh."
            detail="Rumor: CEO has run the corp for 150 years."
          />
          <CorpCard
            name="HEIRS OF KERGOZ"
            tagline="Nano worship. Death cult."
            detail="Not a corp. A horde. They serve the two-headed daemon."
          />
        </div>
      </section>

      {/* The City */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase border-b-2 border-cy-yellow pb-2">
          The City of Cy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DistrictCard
            name="CENTRAL"
            vibe="Corporate towers. Neon. Coffin apartments. The Neon Pillar promises eternal uploads."
          />
          <DistrictCard
            name="THE PORTS"
            vibe="Black market. Hedonism. Gunfights drowned by bass. Royal West owns the biggest warehouses."
          />
          <DistrictCard
            name="THE SLUMS"
            vibe="Gangs. Cults. Honest people with no hope. Virid Vipers vs Heirs of Kergoz in endless war."
          />
          <DistrictCard
            name="MOSSCROFT"
            vibe="Industrial hellscape. Toxic smog. Worker drones. Kaytell Makers' chemical plants."
          />
          <DistrictCard
            name="THE HILLS"
            vibe="Gated luxury. Panopticon surveillance. Old money. Where the CEOs live."
          />
          <DistrictCard
            name="THE INBETWEENS"
            vibe="Salaryfolk. Cubicle zombies. Bland tenement slabs under endless ads."
          />
        </div>
      </section>
    </Page>
  );
}

// Component: Corp Card
function CorpCard({ name, tagline, detail }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 p-4 hover:border-cy-cyan/50 transition-all group">
      <h3 className="text-lg font-black text-cy-cyan mb-1 group-hover:text-cy-yellow transition-colors">
        {name}
      </h3>
      <p className="text-sm text-cy-yellow mb-2 font-bold">{tagline}</p>
      <p className="text-xs text-gray-400">{detail}</p>
    </div>
  );
}

// Component: District Card
function DistrictCard({ name, vibe }) {
  return (
    <div className="bg-black/50 border border-gray-800 p-4 hover:border-cy-cyan/50 transition-all">
      <h3 className="text-sm font-black text-cy-cyan mb-2 uppercase tracking-wide">
        {name}
      </h3>
      <p className="text-xs text-gray-400 leading-relaxed">{vibe}</p>
    </div>
  );
}
