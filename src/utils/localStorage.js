// ─── Keys ────────────────────────────────────────────────────────────────────

export const STORAGE_KEY                    = 'cyborg_terminal_secrets';
export const PASSWORD_STORAGE_KEY           = 'cyborg_terminal_passwords';
export const PASSWORD_ATTEMPTS_STORAGE_KEY  = 'cyborg_terminal_password_attempts';
export const HISTORY_KEY                    = 'cyborg_terminal_history';
export const COLLAPSED_STORAGE_KEY          = 'terminal_commands_expanded';
export const COLLAPSED_CONTENT_STORAGE_KEY  = 'terminal_commands_content_expanded';
export const TREE_STORAGE_KEY               = 'terminal-tree-expanded';
export const CLASS_BUTTONS_STORAGE_KEY      = 'cyborg_class_buttons_open';
export const COLLAPSE_STORAGE_KEY           = 'cyborg_collapse_states';
export const CYBORG_LAST_SELECTED           = 'cyborg_last_selected';
export const CYBORG_SAVED_CHARACTERS        = 'cyborg_saved_characters';
export const RETCOM_EXTRACTED_KEY           = 'cyborg_retcom_extracted';
export const RETCOM_WALLET_KEY              = 'cyborg_retcom_wallet';
export const LIST_INDENT_KEY                = 'cyborg_list_indent';

// Alias — both names exist in the codebase
export const WALLET_STORAGE_KEY = RETCOM_WALLET_KEY;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function get(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    console.error(`Failed to load ${key}:`, e);
    return fallback;
  }
}

function set(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to save ${key}:`, e);
  }
}

// ─── Secrets ─────────────────────────────────────────────────────────────────

export const getDiscoveredSecrets  = ()        => get(STORAGE_KEY, []);
export const saveDiscoveredSecrets = (secrets) => set(STORAGE_KEY, secrets);

// ─── Passwords ───────────────────────────────────────────────────────────────

export const getDiscoveredPasswords  = ()          => get(PASSWORD_STORAGE_KEY, {});
export const saveDiscoveredPasswords = (passwords) => set(PASSWORD_STORAGE_KEY, passwords);

// ─── Extracted Items ──────────────────────────────────────────────────────────

export const getExtracted  = ()          => get(RETCOM_EXTRACTED_KEY, {});
export const saveExtracted = (extracted) => set(RETCOM_EXTRACTED_KEY, extracted);

// ─── Wallet ───────────────────────────────────────────────────────────────────

export const getWallet = () => get(RETCOM_WALLET_KEY, { credits: 0, items: [] });

export function saveWallet(wallet) {
  set(RETCOM_WALLET_KEY, wallet);
  window.dispatchEvent(new Event('walletUpdated'));
}

// export function transferWalletToCharacter(character) {
//   const wallet = getWallet();
//   // apply wallet.credits and wallet.items to character
//   // saveWallet({ credits: 0, items: [] });
// }

// export const STORAGE_KEY = 'cyborg_terminal_secrets';
// export const PASSWORD_STORAGE_KEY = 'cyborg_terminal_passwords';
// export const PASSWORD_ATTEMPTS_STORAGE_KEY = 'cyborg_terminal_password_attempts';
// export const HISTORY_KEY = 'cyborg_terminal_history';
// export const COLLAPSED_STORAGE_KEY = 'terminal_commands_expanded';
// export const COLLAPSED_CONTENT_STORAGE_KEY = 'terminal_commands_content_expanded'
// export const TREE_STORAGE_KEY = 'terminal-tree-expanded';
// export const CLASS_BUTTONS_STORAGE_KEY = "cyborg_class_buttons_open";
// export const WALLET_STORAGE_KEY = 'cyborg_retcom_wallet';
// export const COLLAPSE_STORAGE_KEY = "cyborg_collapse_states";

// export const CYBORG_LAST_SELECTED = "cyborg_last_selected";
// export const CYBORG_SAVED_CHARACTERS = 'cyborg_saved_characters';

// export const RETCOM_EXTRACTED_KEY = 'cyborg_retcom_extracted';
// export const RETCOM_WALLET_KEY = 'cyborg_retcom_wallet';

// export function getDiscoveredSecrets() {
//   try {
//     const data = localStorage.getItem(STORAGE_KEY);
//     return data ? JSON.parse(data) : [];
//   } catch (e) {
//     console.error('Failed to load discovered secrets:', e);
//     return [];
//   }
// }

// export function saveDiscoveredSecrets(secrets) {
//   try {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(secrets));
//   } catch (e) {
//     console.error('Failed to save discovered secrets:', e);
//   }
// }

// export function getDiscoveredPasswords() {
//   try {
//     const data = localStorage.getItem(PASSWORD_STORAGE_KEY);
//     return data ? JSON.parse(data) : {};
//   } catch (e) {
//     console.error('Failed to load discovered passwords:', e);
//     return {};
//   }
// }

// export function saveDiscoveredPasswords(passwords) {
//   try {
//     localStorage.setItem(PASSWORD_STORAGE_KEY, JSON.stringify(passwords));
//   } catch (e) {
//     console.error('Failed to save discovered passwords:', e);
//   }
// }
