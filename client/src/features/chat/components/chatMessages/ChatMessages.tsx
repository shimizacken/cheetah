import React from 'react';
import {ChatMessageContainer} from '../chatMessage/ChatMessageContainer';
import {ChatMessage} from '../../../../state/store.types';

export const ChatMessages: React.FC<{messages: ChatMessage[]}> = ({
  messages
}) => {
  if (!messages.length) {
    return null;
  }

  return (
    <>
      {Object.values(messages).map((message) => (
        <ChatMessageContainer key={message.id} message={message} />
      ))}
    </>
  );
};
