import { ThemeTypes } from './themeTypes';
import { themeStorageKey } from './themeStorageKey';

export const getPersistedTheme = (storage) => {
  const themeType = storage.getItem(themeStorageKey);

  return themeType ? themeType : ThemeTypes.light;
};
