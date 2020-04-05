import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';
import { ChatMessage } from './ChatMessage';

export const ChatMessages = () => {
  const messages = useSelector((state) => state?.chat?.messages);

  if (isEmpty(messages)) {
    return null;
  }

  return (
    <div>
      {Object.values(messages).map((message) => {
        return <ChatMessage key={message.id} text={message.text} userName={message.userRef} active={message.active} />;
      })}
    </div>
  );
};
