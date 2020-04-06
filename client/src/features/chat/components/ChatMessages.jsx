import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { ChatMessageContainer } from './ChatMessageContainer';

export const ChatMessages = ({ messages }) => {
  if (isEmpty(messages)) {
    return null;
  }

  return Object.values(messages).map((message) => {
    return <ChatMessageContainer key={message.id} message={message} />;
  });
};
