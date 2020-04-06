import { TOGGLE_THEME } from './constants';

export const toggleTheme = (themeType) => ({
  type: TOGGLE_THEME,
  themeType
});
