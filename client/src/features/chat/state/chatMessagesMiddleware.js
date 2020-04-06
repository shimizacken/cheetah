import { getWS } from '../bll/network/messagesLoader';
import { PUBLISH_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from './chatMessagesConstants';
import { selectMessage } from './chatMessagesSelectors';

export const chatMessagesMiddleware = ({ getState }) => (next) => (action) => {
  if (action.type === PUBLISH_MESSAGE) {
    getWS().send(JSON.stringify(action.message));
  }

  if (action.type === EDIT_MESSAGE) {
    getWS().send(JSON.stringify(action.message));
  }

  if (action.type === DELETE_MESSAGE) {
    const message = selectMessage(action.messageId)(getState());

    getWS().send(
      JSON.stringify({
        ...message,
        deleted: true
      })
    );
  }

  return next(action);
};
