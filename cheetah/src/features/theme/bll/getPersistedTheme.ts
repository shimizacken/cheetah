import { ThemeTypes } from '../../../state/store.types';
import { themeStorageKey } from './themeStorageKey';

export const getPersistedTheme = (storage: Storage) =>
  (storage.getItem(themeStorageKey) || 'dark') as ThemeTypes;
