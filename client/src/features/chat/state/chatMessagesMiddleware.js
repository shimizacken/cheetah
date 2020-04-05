import { getWS } from '../bll/network/messagesLoader';
import { PUBLISH_MESSAGE } from './chatMessagesConstants';

export const chatMessagesMiddleware = () => (next) => (action) => {
  if (action.type === PUBLISH_MESSAGE) {
    getWS().send(JSON.stringify(action.message));
  }

  return next(action);
};
