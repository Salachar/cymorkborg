import MastermindHack from './MastermindHack';

export default {
  title: 'Terminal/MastermindHack',
  component: MastermindHack,
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

// Tutorial - Very Easy (3 symbols, 3 colors, 4 length, 5 sequences, 6 attempts)
export const Tutorial = {
  args: {
    sequenceLength: 4,
    sequenceCount: 6,
    attempts: 6,
    symbolCount: 3,
    colorCount: 3,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Tutorial complete! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Tutorial failed - try again');
    },
  },
};

// Easy - Beginner Level (4 symbols, 4 colors, 5 length, 8 sequences, 5 attempts)
export const Easy = {
  args: {
    sequenceLength: 5,
    sequenceCount: 8,
    attempts: 5,
    symbolCount: 4,
    colorCount: 4,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Easy hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Easy hack failed');
    },
  },
};

// Standard - Default Difficulty (4 symbols, 4 colors, 5 length, 10 sequences, 4 attempts)
export const Standard = {
  args: {
    sequenceLength: 5,
    sequenceCount: 10,
    attempts: 4,
    symbolCount: 4,
    colorCount: 4,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Standard hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Standard hack failed');
    },
  },
};

// Medium - Moderate Challenge (5 symbols, 5 colors, 5 length, 12 sequences, 4 attempts)
export const Medium = {
  args: {
    sequenceLength: 5,
    sequenceCount: 12,
    attempts: 4,
    symbolCount: 5,
    colorCount: 5,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Medium hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Medium hack failed');
    },
  },
};

// Hard - Difficult (6 symbols, 6 colors, 6 length, 12 sequences, 4 attempts)
export const Hard = {
  args: {
    sequenceLength: 6,
    sequenceCount: 12,
    attempts: 4,
    symbolCount: 6,
    colorCount: 6,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Hard hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Hard hack failed');
    },
  },
};

// Expert - Very Difficult (6 symbols, 6 colors, 6 length, 15 sequences, 3 attempts)
export const Expert = {
  args: {
    sequenceLength: 6,
    sequenceCount: 15,
    attempts: 3,
    symbolCount: 6,
    colorCount: 6,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Expert hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Expert hack failed');
    },
  },
};

// Nightmare - Brutal (6 symbols, 6 colors, 7 length, 15 sequences, 3 attempts)
export const Nightmare = {
  args: {
    sequenceLength: 7,
    sequenceCount: 15,
    attempts: 3,
    symbolCount: 6,
    colorCount: 6,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Nightmare hack cracked! You are a legend.');
    },
    onFailure: () => {
      console.log('✗ Nightmare hack failed - as expected');
    },
  },
};

// Short Sprint - Quick Puzzle (4 symbols, 4 colors, 3 length, 8 sequences, 5 attempts)
export const ShortSprint = {
  args: {
    sequenceLength: 3,
    sequenceCount: 8,
    attempts: 5,
    symbolCount: 4,
    colorCount: 4,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Sprint complete! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Sprint failed');
    },
  },
};

// Long Grind - Marathon (5 symbols, 5 colors, 6 length, 20 sequences, 5 attempts)
export const LongGrind = {
  args: {
    sequenceLength: 6,
    sequenceCount: 20,
    attempts: 5,
    symbolCount: 5,
    colorCount: 5,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Marathon complete! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Marathon failed');
    },
  },
};

// Generous - Lots of Attempts (4 symbols, 4 colors, 5 length, 10 sequences, 8 attempts)
export const Generous = {
  args: {
    sequenceLength: 5,
    sequenceCount: 10,
    attempts: 8,
    symbolCount: 4,
    colorCount: 4,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Generous hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Even with 8 attempts? Really?');
    },
  },
};

// Minimal - Barely Any Attempts (5 symbols, 5 colors, 5 length, 12 sequences, 2 attempts)
export const Minimal = {
  args: {
    sequenceLength: 5,
    sequenceCount: 12,
    attempts: 2,
    symbolCount: 5,
    colorCount: 5,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Minimal cracked with 2 attempts - impressive!');
    },
    onFailure: () => {
      console.log('✗ 2 attempts is brutal');
    },
  },
};

// ColorFocus - Many Colors, Few Symbols (3 symbols, 6 colors, 5 length, 10 sequences, 4 attempts)
export const ColorFocus = {
  args: {
    sequenceLength: 5,
    sequenceCount: 10,
    attempts: 4,
    symbolCount: 3,
    colorCount: 6,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Color-focused hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Color confusion');
    },
  },
};

// SymbolFocus - Many Symbols, Few Colors (6 symbols, 3 colors, 5 length, 10 sequences, 4 attempts)
export const SymbolFocus = {
  args: {
    sequenceLength: 5,
    sequenceCount: 10,
    attempts: 4,
    symbolCount: 6,
    colorCount: 3,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Symbol-focused hack cracked! Answer:', answer);
    },
    onFailure: () => {
      console.log('✗ Symbol overload');
    },
  },
};

// Story Examples - Narrative Context

// Corporate Firewall
export const CorporateFirewall = {
  args: {
    sequenceLength: 5,
    sequenceCount: 10,
    attempts: 4,
    symbolCount: 4,
    colorCount: 4,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Corporate firewall breached! Accessing employee records...');
    },
    onFailure: () => {
      console.log('✗ Security lockdown initiated. Trace detected.');
    },
  },
};

// Military Database
export const MilitaryDatabase = {
  args: {
    sequenceLength: 6,
    sequenceCount: 15,
    attempts: 3,
    symbolCount: 6,
    colorCount: 6,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Military database compromised! Downloading classified files...');
    },
    onFailure: () => {
      console.log('✗ Intrusion detected. Black ICE deployed.');
    },
  },
};

// Street Vendor Terminal
export const StreetVendor = {
  args: {
    sequenceLength: 4,
    sequenceCount: 6,
    attempts: 6,
    symbolCount: 3,
    colorCount: 3,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Vendor terminal hacked! Credits transferred.');
    },
    onFailure: () => {
      console.log('✗ Terminal locked. Vendor alerted.');
    },
  },
};

// Bank Vault
export const BankVault = {
  args: {
    sequenceLength: 6,
    sequenceCount: 12,
    attempts: 4,
    symbolCount: 5,
    colorCount: 5,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Vault cracked! Transferring funds...');
    },
    onFailure: () => {
      console.log('✗ Vault sealed. Silent alarm triggered.');
    },
  },
};

// Medical Records
export const MedicalRecords = {
  args: {
    sequenceLength: 5,
    sequenceCount: 8,
    attempts: 5,
    symbolCount: 4,
    colorCount: 4,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ Patient database accessed! Downloading records...');
    },
    onFailure: () => {
      console.log('✗ Access denied. HIPAA violation logged.');
    },
  },
};

// BlackICE - Final Boss
export const BlackICE = {
  args: {
    sequenceLength: 7,
    sequenceCount: 20,
    attempts: 2,
    symbolCount: 6,
    colorCount: 6,
    onSuccess: (command, commandDef, answer) => {
      console.log('✓ BLACK ICE DEFEATED! Core systems unlocked!');
    },
    onFailure: () => {
      console.log('✗ BLACK ICE LETHAL FEEDBACK. Neural damage imminent.');
    },
  },
};
