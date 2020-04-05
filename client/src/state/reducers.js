import { combineReducers } from 'redux';
import { chat } from '../features/chat';
import { users } from '../features/authentication';

export const reducers = combineReducers({
  chat,
  users
});
