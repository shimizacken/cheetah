import { combineReducers } from 'redux';

const usersInitialState = [];

export const users = (state = usersInitialState) => {
  return state;
};

const messagesInitialState = [];

export const messages = (state = messagesInitialState) => {
  return state;
};

export const chat = combineReducers({
  users,
  messages
});
  