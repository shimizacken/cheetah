import { State } from '../../../state/store.types';

export const selectCurrentTheme = (state: State) => state.themeType;

export const selectIsDarkMode = (state: State) => state.themeType === 'dark';
