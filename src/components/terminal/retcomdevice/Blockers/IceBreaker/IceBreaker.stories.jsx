import IceBreaker from './IceBreaker';

export default {
  title: 'Terminal/IceBreaker',
  component: IceBreaker,
};

export const PresetEasy = {
  args: {
    difficulty: 'easy',
  },
};

export const PresetMedium = {
  args: {
    difficulty: 'medium',
  },
};

export const PresetHard = {
  args: {
    difficulty: 'hard',
  },
};

export const PresetExpert = {
  args: {
    difficulty: 'expert',
  },
};

export const PresetCorporate = {
  args: {
    difficulty: 'corporate',
  },
};

// Default / Playground
export const Playground = {
  args: {
    gapSize: 60,
    rotationSpeed: 2,
  },
};

// Tutorial - Very Easy
export const Tutorial = {
  args: {
    gapSize: 90,
    rotationSpeed: 0.5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tutorial difficulty - Large gap (quarter circle), very slow rotation. Perfect for learning the mechanics.',
      },
    },
  },
};

// Easy
export const Easy = {
  args: {
    gapSize: 75,
    rotationSpeed: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Easy difficulty - Large gap, slow rotation. Good for beginners.',
      },
    },
  },
};

// Medium
export const Medium = {
  args: {
    gapSize: 60,
    rotationSpeed: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium difficulty - Medium gap (sixth of circle), moderate speed. Standard challenge.',
      },
    },
  },
};

// Hard
export const Hard = {
  args: {
    gapSize: 45,
    rotationSpeed: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hard difficulty - Smaller gap, fast rotation. Requires good timing.',
      },
    },
  },
};

// Expert
export const Expert = {
  args: {
    gapSize: 30,
    rotationSpeed: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Expert difficulty - Small gap (twelfth of circle), very fast rotation. For skilled hackers only.',
      },
    },
  },
};

// Nightmare
export const Nightmare = {
  args: {
    gapSize: 20,
    rotationSpeed: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Nightmare difficulty - Tiny gap, maximum speed. Nearly impossible without pause feature.',
      },
    },
  },
};

// Big Gap, Fast (tricky timing despite large opening)
export const BigGapFast = {
  args: {
    gapSize: 80,
    rotationSpeed: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large gap but very fast - Tests reaction time more than precision.',
      },
    },
  },
};

// Small Gap, Slow (precision over reaction)
export const SmallGapSlow = {
  args: {
    gapSize: 25,
    rotationSpeed: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tiny gap but slow - Tests precision more than reaction time.',
      },
    },
  },
};

// Corporate Firewall
export const CorporateFirewall = {
  args: {
    gapSize: 55,
    rotationSpeed: 2.5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Corporate-grade ICE - Medium-hard difficulty representing typical security.',
      },
    },
  },
};

// Military Grade
export const MilitaryGrade = {
  args: {
    gapSize: 35,
    rotationSpeed: 3.5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Military-grade ICE - High difficulty for sensitive installations.',
      },
    },
  },
};

// Black ICE
export const BlackICE = {
  args: {
    gapSize: 22,
    rotationSpeed: 4.5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Black ICE - Lethal counter-intrusion software. Extreme difficulty.',
      },
    },
  },
};
