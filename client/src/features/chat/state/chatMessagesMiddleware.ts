import {Middleware} from 'redux';
import {ChatMessageEvent} from '../../../packages/socket/savannah.types';
import {getSocket} from '../../../packages/socket/src/socket';
import {ChatMessage} from '../../../state/store.types';
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
    socket.send(
      JSON.stringify({
        type: 'chat-message',
        message: action.message
      })
    );
  }

  if (action.type === DELETE_MESSAGE) {
    const socket = getSocket();
    const message = selectMessage(action.messageId)(getState());

    const messageEvent: ChatMessageEvent = {
      type: 'chat-message',
      message: {
        ...message,
        deleted: true
      }
    };

    socket.send(JSON.stringify(messageEvent));
  }

  return next(action);
};
