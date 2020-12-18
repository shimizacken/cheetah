import {Middleware} from 'redux';
import {getSocket} from '../../../packages/socket/src/socket';
import {
  PUBLISH_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE
} from './chatMessagesConstants';
import {selectMessage} from './chatMessagesSelectors';

export const chatMessagesMiddleware: Middleware = ({getState}) => (next) => (
  action
) => {
  if (action.type === PUBLISH_MESSAGE || action.type === EDIT_MESSAGE) {
    const socket = getSocket();
    socket.send(JSON.stringify(action.message));
  }

  if (action.type === DELETE_MESSAGE) {
    const socket = getSocket();
    const message = selectMessage(action.messageId)(getState());

    socket.send(
      JSON.stringify({
        ...message,
        deleted: true
      })
    );
  }

  return next(action);
};
