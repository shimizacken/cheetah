import { TOGGLE_THEME } from './constants';
import { themeStorageKey } from '../bll/themeStorageKey';
import { Middleware } from 'redux';

export const themeTypeMiddleware: Middleware = () => (next) => (action) => {
  if (action.type === TOGGLE_THEME) {
    window.localStorage.setItem(themeStorageKey, action.themeType);
  }

  return next(action);
};
