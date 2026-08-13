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
export const BOOKMARKS_STORAGE_KEY          = 'cyborg_bookmarks';
export const NOTES_STORAGE_KEY              = 'retcom_notes';

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

export function getNotes() {
  try {
    const saved = localStorage.getItem(NOTES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to load notes:', e);
    return [];
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes:', e);
  }
}
