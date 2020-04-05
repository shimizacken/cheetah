import produce from 'immer';
import { PUBLISH_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE, SET_MESSAGES } from './chatMessagesConstants';

const messagesInitialState = {};

export const messages = (state = messagesInitialState, action) => {
  if (action.type === SET_MESSAGES) {
    return action.messages;
  }

  if (action.type === PUBLISH_MESSAGE) {
    return {
      ...state,
      [action.message.id]: action.message
    };
  }

  if (action.type === EDIT_MESSAGE) {
    const nextState = produce(state, (draftState) => {
      draftState[action.message.id] = action.message;

      return draftState;
    });

    return nextState;
  }

  if (action.type === DELETE_MESSAGE) {
    const nextState = produce(state, (draftState) => {
      draftState[action.messageId].deleted = true;

      return draftState;
    });

    return nextState;
  }

  return state;
};
