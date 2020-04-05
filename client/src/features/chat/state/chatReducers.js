import { combineReducers } from 'redux';
import { users } from './chatUsersReducer';
import { messages } from './chatMessagesReducer';

export const chat = combineReducers({
  users,
  messages
});
