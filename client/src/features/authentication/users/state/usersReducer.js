import { combineReducers } from 'redux';
import produce from 'immer';
import { ADD_USER, SET_USER_ACTIVE, SET_CURRENT_USER_ID } from './usersConstants';

const usersInitialState = {};

export const users = (state = usersInitialState, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      ...action.user
    };
  }

  if (action.type === SET_USER_ACTIVE) {
    const nextState = produce(state, (draftState) => {
      draftState[action.userId].active = !draftState[action.userId].active;

      return draftState;
    });

    return nextState;
  }

  return state;
};

const currentUserIdInitialState = '';

export const currentUserId = (state = currentUserIdInitialState, action) => {
  if (action.type === SET_CURRENT_USER_ID) {
    return action.currentUserId;
  }

  return state;
};

export const authentication = combineReducers({
  users,
  currentUserId
});
