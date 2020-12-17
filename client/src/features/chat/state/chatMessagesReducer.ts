import produce from 'immer';
import { AnyAction } from 'redux';
import {
  PUBLISH_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  SET_MESSAGES
} from './chatMessagesConstants';

import type { ChatMessages } from '../../../state/store.types';

const MessagesInitialState: ChatMessages = {
  messages: {}
};

export const messages = (state = MessagesInitialState, action: AnyAction) => {
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
    const nextState = produce(state, (draftState: ChatMessages) => {
      draftState.messages[action.message.id] = action.message;

      return draftState;
    });

    return nextState;
  }

  if (action.type === DELETE_MESSAGE) {
    const nextState = produce(state, (draftState) => {
      draftState.messages[action.messageId].deleted = true;

      return draftState;
    });

    return nextState;
  }

  return state;
};
