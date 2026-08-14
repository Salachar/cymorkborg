// ─── Keys ────────────────────────────────────────────────────────────────────

export const CYBORG_MARKET_COLLAPSED_SECTIONS_KEY = 'cy_borg_collapse_states';
export const CYBORG_CLASS_BUTTONS_KEY = 'cyborg_class_buttons_open';
export const CYBORG_COLLAPSED_SECTIONS_KEY = 'cyborg_collapse_states';
export const CYBORG_LAST_SELECTED_CHARACTER_KEY = 'cyborg_last_selected';
export const CYBORG_SAVED_CHARACTERS_KEY = 'cyborg_saved_characters';
export const CYBORG_NOTES_KEY = 'retcom_notes';
export const CYBORG_SHARED_FEED_KEY = 'retcom_shared_feed';
export const CYBORG_WS_HOST_KEY = 'retcom_ws_host';
export const CYBORG_WS_NAME_KEY = 'retcom_player_name';

export const RETCOM_EXTRACTED_KEY = 'cyborg_retcom_extracted';
export const RETCOM_WALLET_KEY = 'cyborg_retcom_wallet';
export const RETCOM_NODES_INDENT_KEY = 'cyborg_list_indent';
export const RETCOM_BOOKMARKS_KEY = 'cyborg_bookmarks';
export const RETCOM_PASSWORD_KEY = 'cyborg_terminal_passwords';
export const RETCOM_PASSWORD_ATTEMPTS_KEY = 'cyborg_terminal_password_attempts';
export const RETCOM_NODE_CONTENT_SIZE_KEY = 'terminal_commands_content_expanded';
export const RETCOM_NODES_EXPANDED_KEY = 'terminal-tree-expanded';

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

// ─── Passwords ───────────────────────────────────────────────────────────────

export const getDiscoveredPasswords  = ()          => get(RETCOM_PASSWORD_KEY, {});
export const saveDiscoveredPasswords = (passwords) => set(RETCOM_PASSWORD_KEY, passwords);

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
    const saved = localStorage.getItem(CYBORG_NOTES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to load notes:', e);
    return [];
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(CYBORG_NOTES_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes:', e);
  }
}
