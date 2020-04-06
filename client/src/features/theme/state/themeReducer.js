import { TOGGLE_THEME } from './constants';
import { ThemeTypes } from '../bll/themeTypes';
import { getPersistedTheme } from '../bll/getPersistedTheme';

const themeType = (state = ThemeTypes.dark, action) => {
  if (action.type === TOGGLE_THEME) {
    return action.themeType;
  }

  return state;
};

export const themeTypeEnhancer = (state, action) => {
  const persistedThemeType = getPersistedTheme(window?.localStorage);

  if (persistedThemeType && Object.values(ThemeTypes).includes(persistedThemeType)) {
    return persistedThemeType;
  }

  return themeType(state, action);
};

export { themeTypeEnhancer as themeType };
