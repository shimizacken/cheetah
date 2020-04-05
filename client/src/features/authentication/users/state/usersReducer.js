import produce from 'immer';
import { ADD_USER, SET_USER_ACTIVE } from './usersConstants';

const usersInitialState = {};

export const users = (state = usersInitialState, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      [action.user.id]: action.user
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
