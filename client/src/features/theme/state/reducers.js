import { getPersistedTheme } from 'app/features/theme/bll/getPersistedTheme';
import { TOGGLE_THEME } from './constants';
import { ThemeTypes } from '../bll/themeTypes';

const themeType = (state = ThemeTypes.light, action) => {
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
