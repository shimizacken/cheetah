import { ThemeTypes } from '../../../state/store.types';
import { TOGGLE_THEME } from './constants';

export const toggleTheme = (themeType: ThemeTypes) => ({
  type: TOGGLE_THEME,
  themeType
});
