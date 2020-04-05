import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';

export const ChatMessages = () => {
  const messages = useSelector((state) => state?.chat?.messages);

  if (isEmpty(messages)) {
    return null;
  }

  return (
    <div>
      {Object.values(messages).map((message) => {
        return <div key={message.id}>{message.text}</div>;
      })}
    </div>
  );
};
