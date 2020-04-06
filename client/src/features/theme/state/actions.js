import { TOGGLE_THEME, THEME_CHANGED } from './constants';

export const toggleTheme = (themeType) => ({
  type: TOGGLE_THEME,
  themeType
});

export const themeChanged = (themeType) => ({
  type: THEME_CHANGED,
  themeType
});
