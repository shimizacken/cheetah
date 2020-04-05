import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';
import { ChatMessageContainer } from './ChatMessageContainer';

export const ChatMessages = () => {
  const users = useSelector((state) => state?.users);
  const messages = useSelector((state) => state?.chat?.messages);

  if (isEmpty(users) || isEmpty(messages)) {
    return null;
  }
  return (
    <div>
      {Object.values(messages).map((message) => {
        return <ChatMessageContainer key={message.id} text={message.text} userRef={message.userRef} />;
      })}
    </div>
  );
};