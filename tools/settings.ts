import { Settings } from './types';

export function loadSettings(path: string): Settings | null {
  const item = localStorage.getItem(path);
  if (!item) {
    return null;
  }

  try {
    return JSON.parse(item) as Settings;
  } catch (e) {
    return null;
  }
}
