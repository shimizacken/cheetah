import { AnyAction } from 'redux';
import { TOGGLE_THEME } from './constants';
import { getPersistedTheme } from '../bll/getPersistedTheme';
import { themeTypes, ThemeTypes } from '../../../state/store.types';

type ThemeState = ThemeTypes;

const themeType = (state: ThemeState = 'dark', action: AnyAction) => {
  if (action.type === TOGGLE_THEME) {
    return action.themeType;
  }

  return state;
};

export const themeTypeEnhancer = (state: ThemeState, action: AnyAction) => {
  const persistedThemeType = getPersistedTheme(window?.localStorage);

  if (
    persistedThemeType &&
    Object.values(themeTypes).includes(persistedThemeType)
  ) {
    return persistedThemeType;
  }

  return themeType(state, action);
};

export { themeTypeEnhancer as themeType };
