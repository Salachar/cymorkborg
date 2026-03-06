import CorpAd from './CorpAd';

export default {
  title: 'Terminal/CorpAd',
  component: CorpAd,
};

export const BlankProps = {
  args: {},
};

// Major corporation - tech giant
export const Bigmosse = {
  args: {
    corp: 'BIGMOSSE',
    slogan: 'Building Tomorrow\'s Infrastructure',
    tagline: 'Leading the charge in urban development, security solutions, and data management',
    products: ['SmartCity Systems', 'SecureNet', 'DataVault Pro', 'CloudCore'],
    cta: 'Apply for Corporate Partnership',
    theme: 'cyber',
    logo: '🏢',
  },
};

// Security corporation
export const SecOps = {
  args: {
    corp: 'SECOPS',
    slogan: 'Your Safety. Our Priority.',
    tagline: 'Premier security and law enforcement solutions for the modern city',
    products: ['Armed Response', 'Surveillance Systems', 'Patrol Services', 'Risk Assessment'],
    cta: 'Contact for Security Consultation',
    theme: 'sleek',
    logo: '🛡️',
  },
};

// Medical/pharmaceutical corp
export const VitalCorp = {
  args: {
    corp: 'VITALCORP',
    slogan: 'Life Enhanced',
    tagline: 'Cutting-edge biotech and pharmaceutical innovations',
    products: ['Neural Interfaces', 'Augmentation Tech', 'Gene Therapy', 'Life Extension'],
    cta: 'Schedule Your Enhancement Today',
    theme: 'green',
    logo: '⚕️',
  },
};

// Luxury brand
export const EliteServices = {
  args: {
    corp: 'PRESTIGE ELITE',
    slogan: 'Excellence Without Compromise',
    tagline: 'Exclusive services for distinguished clientele',
    products: ['VIP Transport', 'Private Security', 'Concierge Access', 'Elite Membership'],
    cta: 'Inquire About Membership',
    theme: 'gold',
    logo: '👑',
  },
};

// Entertainment/nightlife
export const NeonDreams = {
  args: {
    corp: 'NEON DREAMS',
    slogan: 'Where the Night Comes Alive',
    tagline: 'Premium entertainment district - Cave Club, Quantum Lounge, and Skyline Bar',
    products: ['VIP Access', 'Event Hosting', 'Private Rooms', 'Premium Cocktails'],
    cta: 'Reserve Your Night',
    theme: 'neon',
    logo: '🎆',
  },
};

// Transportation services
export const MetroLink = {
  args: {
    corp: 'METROLINK',
    slogan: 'Connecting Every Corner',
    tagline: 'Fast, reliable transit across the city',
    products: ['Express Routes', 'Water Taxi', 'Cargo Transport', 'Monthly Passes'],
    cta: 'Download the MetroLink App',
    theme: 'corporate',
    logo: '🚇',
  },
};

// Data/AI corporation
export const SyntheticMinds = {
  args: {
    corp: 'SYNTHETIC MINDS',
    slogan: 'Intelligence Amplified',
    tagline: 'Advanced AI solutions for business and personal use',
    products: ['Virtual Assistants', 'Predictive Analytics', 'Automation Suite', 'Neural Networks'],
    cta: 'Start Your Free Trial',
    theme: 'purple',
    logo: '🧠',
  },
};

// Energy corporation
export const PowerGrid = {
  args: {
    corp: 'POWERGRID UNLIMITED',
    slogan: 'Fueling the Future',
    tagline: 'Sustainable energy solutions for urban centers',
    products: ['Smart Grid', 'Solar Arrays', 'Fusion Cells', 'Battery Storage'],
    cta: 'Switch to Clean Energy',
    theme: 'green',
    logo: '⚡',
  },
};

// Real estate/housing
export const SkylineLiving = {
  args: {
    corp: 'SKYLINE LIVING',
    slogan: 'Elevated Urban Lifestyle',
    tagline: 'Luxury apartments and commercial spaces in prime locations',
    products: ['High-Rise Units', 'Smart Homes', 'Security Features', 'Amenities Access'],
    cta: 'Schedule a Viewing',
    theme: 'sleek',
    logo: '🏙️',
  },
};

// Weapons/military contractor
export const ApexArmaments = {
  args: {
    corp: 'APEX ARMAMENTS',
    slogan: 'Precision. Power. Protection.',
    tagline: 'Military-grade equipment for authorized personnel',
    products: ['SmartGuns', 'Tactical Gear', 'Defense Systems', 'Training Programs'],
    cta: 'Verify Credentials for Access',
    theme: 'dystopian',
    logo: '🎯',
  },
};

// Banking/finance
export const QuantumFinancial = {
  args: {
    corp: 'QUANTUM FINANCIAL',
    slogan: 'Your Wealth, Secured',
    tagline: 'Encrypted banking and investment services',
    products: ['Digital Wallets', 'Crypto Trading', 'Offshore Accounts', 'AI Investing'],
    cta: 'Open Account Today',
    theme: 'gold',
    logo: '💰',
  },
};

// Food/nutrition corp
export const NutraSynth = {
  args: {
    corp: 'NUTRASYNTH',
    slogan: 'Nutrition Perfected',
    tagline: 'Lab-grown meals and synthetic supplements for optimal health',
    products: ['Meal Packs', 'Protein Bars', 'Vitamin Boosters', 'Custom Nutrition'],
    cta: 'Order Your First Pack',
    theme: 'green',
    logo: '🍱',
  },
};

// Surveillance/monitoring
export const WatchTower = {
  args: {
    corp: 'WATCHTOWER SYSTEMS',
    slogan: 'Always Watching. Always Protecting.',
    tagline: 'Comprehensive surveillance solutions for businesses and municipalities',
    products: ['AI Cameras', 'Facial Recognition', 'Drone Patrols', 'Data Analytics'],
    cta: 'Request System Demo',
    theme: 'cyber',
    logo: '👁️',
  },
};

// Minimal ad (simple service)
export const MinimalAd = {
  args: {
    corp: 'CITYLINK',
    slogan: 'Stay Connected',
    products: ['High-Speed Internet', 'Mobile Plans'],
    cta: 'Sign Up Now',
    theme: 'corporate',
  },
};

// Dystopian government service
export const CitizenServices = {
  args: {
    corp: 'CITIZEN SERVICES PORTAL',
    slogan: 'Compliance is Security',
    tagline: 'Register. Report. Remain Safe.',
    products: ['ID Registration', 'Permit Applications', 'Violation Reports', 'Social Credit'],
    cta: 'Update Your Status Now',
    theme: 'dystopian',
    logo: '📋',
  },
};

// With custom children content
export const WithCustomContent = {
  args: {
    corp: 'NEURALDYNE',
    slogan: 'Upgrade Your Mind',
    tagline: 'Premium neural enhancement technology',
    products: ['Memory Boost', 'Focus Pro', 'Skill Download', 'Dream Control'],
    theme: 'purple',
    logo: '🧬',
    children: (
      <div>
        <div style={{ marginBottom: '0.5rem' }}>
          ⚠️ Side effects may include: headaches, memory fragmentation, or temporary personality shifts
        </div>
        <div>
          ✓ Certified by City Medical Board • 10,000+ satisfied customers
        </div>
      </div>
    ),
  },
};

// Black market vibes
export const UndergroundServices = {
  args: {
    corp: 'PHANTOM SOLUTIONS',
    slogan: 'No Questions Asked',
    tagline: 'Discrete services for discrete clients',
    products: ['Data Erasure', 'ID Fabrication', 'Untraceable Tech', 'Safe Passage'],
    cta: 'Encrypted Contact Only',
    theme: 'neon',
    logo: '🎭',
  },
};
