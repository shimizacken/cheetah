import { ChatMessage } from '../../../state/store.types';
import {
  PUBLISH_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  SET_MESSAGES
} from './chatMessagesConstants';

export const publishMessage = (message: ChatMessage) => ({
  type: PUBLISH_MESSAGE,
  message
});

export const setMessages = (messages: ChatMessage) => ({
  type: SET_MESSAGES,
  messages
});

export const editMessage = (message: ChatMessage) => ({
  type: EDIT_MESSAGE,
  message
});

export const deleteMessage = (messageId: string) => ({
  type: DELETE_MESSAGE,
  messageId
});
