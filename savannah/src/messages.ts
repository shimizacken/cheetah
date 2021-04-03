import {v4} from 'uuid';
import {log} from '../../cheetah/src/packages/logger';
import type {
  ChatMessage,
  ChatMessageEvent,
  ChatMessagesEvent
} from '../../cheetah/src/packages/socket/savannah.types';
const {urlify, preview} = require('./linkPreview');

const welcomeMessage = {
  id: v4(),
  text: '🤖 Welcome to the chat!',
  userRef: '99f9eac4-0de4-4733-868f-b18610adc6b0',
  date: Date.now(),
  edited: false,
  deleted: false
};

const chatMessages: {
  [key: string]: ChatMessage;
} = {
  [welcomeMessage.id]: welcomeMessage
};

export const chatMessagesHandler = (
  chatMessageEvent: ChatMessageEvent
): ChatMessageEvent => {
  const newChatMessage: ChatMessage = chatMessageEvent.message;
  const url = urlify(chatMessageEvent.message.text);

  if (url) {
    preview(url).then(function (res: any) {
      console.log(res);

      newChatMessage.linkPreview = {
        title: res.title,
        image: res.image,
        description: res.description,
        link: res.link
      };

      chatMessages[chatMessageEvent.message.id] = chatMessageEvent.message;
      console.log('🚀 ~ chat-message - added', newChatMessage);
      log('chat-message', `added - ${newChatMessage.id}`);
    });
  } else {
    chatMessages[chatMessageEvent.message.id] = chatMessageEvent.message;
    log('chat-message', `added - ${newChatMessage.id}`);
  }

  return {
    type: 'chat-message',
    message: newChatMessage
  };
};

export const getAllChatMessages = (_chatMessageEvent: ChatMessagesEvent) => ({
  type: 'chat-messages',
  messages: chatMessages
});
