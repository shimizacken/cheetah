import { combineReducers } from 'redux';
import { chat } from '../features/chat';
import { authentication } from '../features/authentication';

export const reducers = combineReducers({
  chat,
  authentication
});
