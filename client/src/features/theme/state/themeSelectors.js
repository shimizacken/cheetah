import { ThemeTypes } from '../bll/themeTypes';

export const selectCurrentTheme = (state) => state.themeType;

export const selectIsDarkMode = (state) => state.themeType === ThemeTypes.dark;
