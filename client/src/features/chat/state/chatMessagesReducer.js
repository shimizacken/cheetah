import { PUBLISH_MESSAGE } from "./tests/chatMessagesConstants";

const messagesInitialState = [];

export const messages = (state = messagesInitialState, action) => {
  if (action.type === PUBLISH_MESSAGE) {
    return [
      ...state,
      action.message
    ]
  }

  return state;
};
