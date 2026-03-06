export const STORAGE_KEY = 'cyborg_terminal_secrets';
export const PASSWORD_STORAGE_KEY = 'cyborg_terminal_passwords';
export const PASSWORD_ATTEMPTS_STORAGE_KEY = 'cyborg_terminal_password_attempts';
export const HISTORY_KEY = 'cyborg_terminal_history';
export const COLLAPSED_STORAGE_KEY = 'terminal_commands_expanded';
export const COLLAPSED_CONTENT_STORAGE_KEY = 'terminal_commands_content_expanded'
export const TREE_STORAGE_KEY = 'terminal-tree-expanded';

export function getDiscoveredSecrets() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load discovered secrets:', e);
    return [];
  }
}

export function saveDiscoveredSecrets(secrets) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(secrets));
  } catch (e) {
    console.error('Failed to save discovered secrets:', e);
  }
}

export function getDiscoveredPasswords() {
  try {
    const data = localStorage.getItem(PASSWORD_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load discovered passwords:', e);
    return {};
  }
}

export function saveDiscoveredPasswords(passwords) {
  try {
    localStorage.setItem(PASSWORD_STORAGE_KEY, JSON.stringify(passwords));
  } catch (e) {
    console.error('Failed to save discovered passwords:', e);
  }
}
