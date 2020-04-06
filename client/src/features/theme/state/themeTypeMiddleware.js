import { TOGGLE_THEME } from './constants';
import { themeStorageKey } from '../bll/themeStorageKey';

export const themeTypeMiddleware = () => (next) => (action) => {
  if (action.type === TOGGLE_THEME) {
    window.localStorage.setItem(themeStorageKey, action.themeType);
  }

  return next(action);
};
