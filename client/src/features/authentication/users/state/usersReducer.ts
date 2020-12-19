import {AnyAction, combineReducers} from 'redux';
import {
  ADD_USER,
  // SET_USER_ACTIVE,
  SET_CURRENT_USER_ID,
  SIGN_OUT
} from './usersConstants';

const usersInitialState = {};

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
