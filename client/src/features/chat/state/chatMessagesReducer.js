import { PUBLISH_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "./tests/chatMessagesConstants";
import produce from "immer";

const messagesInitialState = {};

export const messages = (state = messagesInitialState, action) => {
  if (action.type === PUBLISH_MESSAGE) {
    return {
      ...state,
      [action.message.id]: action.message
    };
  }

  if (action.type === EDIT_MESSAGE) {
    const nextState = produce(state, draftState => {
      draftState[action.message.id] = action.message;

      return draftState;
    });

    return nextState;
  }

  if (action.type === DELETE_MESSAGE) {
    const nextState = produce(state, draftState => {
      draftState[action.messageId].deleted = true;

      return draftState;
    });

    return nextState;
  }

  return state;
};
