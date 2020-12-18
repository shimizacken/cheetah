import {AnyAction, combineReducers} from 'redux';
import produce from 'immer';
import {
  ADD_USER,
  SET_USER_ACTIVE,
  SET_CURRENT_USER_ID,
  SIGN_OUT
} from './usersConstants';
import type {Authentication} from '../../../../state/store.types';

const usersInitialState: Authentication = {
  users: {},
  currentUserId: ''
};

export const users = (state = usersInitialState, action: AnyAction) => {
  if (action.type === 'UPDATE_MEMBERS') {
    return action.members;
  }

  if (action.type === ADD_USER) {
    return {
      ...state,
      ...action.user
    };
  }

  if (action.type === SET_USER_ACTIVE) {
    const nextState = produce(state, (draftState) => {
      draftState.users[action.userId].active = !draftState.users[action.userId]
        .active;

      return draftState;
    });

    return nextState;
  }

  return state;
};

const currentUserIdInitialState = '';

export const currentUserId = (
  state = currentUserIdInitialState,
  action: AnyAction
) => {
  if (action.type === SET_CURRENT_USER_ID) {
    return action.currentUserId;
  }

  if (action.type === SIGN_OUT) {
    return currentUserIdInitialState;
  }

  return state;
};

export const authentication = combineReducers({
  users,
  currentUserId
});
