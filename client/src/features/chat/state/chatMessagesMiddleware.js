import { getWS } from '../bll/network/ws';
import { PUBLISH_MESSAGE } from './chatMessagesConstants';

export const chatMessagesMiddleware = () => (next) => (action) => {
  if (action.type === PUBLISH_MESSAGE) {
    console.log(action.message);
    getWS().send(JSON.stringify(action.message));
  }

  return next(action);
};
