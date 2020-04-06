import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';
import { ChatMessageContainer } from './ChatMessageContainer';

export const ChatMessages = () => {
  const messages = useSelector((state) => state?.chat?.messages);

  if (isEmpty(messages)) {
    return null;
  }

  return Object.values(messages).map((message) => {
    return (
      <ChatMessageContainer
        key={message.id}
        text={message.text}
        userRef={message.userRef}
        date={message.date}
        deleted={message.deleted}
      />
    );
  });
};
