import { combineReducers } from 'redux';
import { chat } from '../features/chat';
import { authentication } from '../features/authentication';
import { themeType } from '../features/theme';

export const reducers = combineReducers({
  chat,
  authentication,
  themeType
});
