import {ChatMessage} from './chat.types';
import {ChatMessageEvent, ChatMessagesEvent} from './event.types';
import {log} from './logger';
const {urlify, preview} = require('./linkPreview');
const {v4} = require('uuid');

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

      chatMessages[chatMessageEvent.id] = chatMessageEvent.message;
      console.log('🚀 ~ chat-message - added', newChatMessage);
      log('chat-message', `added - ${newChatMessage.id}`);
    });
  } else {
    chatMessages[chatMessageEvent.id] = chatMessageEvent.message;
    log('chat-message', `added - ${newChatMessage.id}`);
  }

  return {
    type: 'chat-message',
    id: v4(),
    message: newChatMessage
  };
};

export const getAllChatMessages = (_chatMessageEvent: ChatMessagesEvent) => ({
  type: 'chat-messages',
  messages: chatMessages
});
