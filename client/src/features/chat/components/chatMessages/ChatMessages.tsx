import React from 'react';
import {ChatMessageContainer} from '../chatMessage/ChatMessageContainer';
import type {ChatMessage} from '../../../../state/store.types';

export const ChatMessages: React.FC<{
  messages: {[key: string]: ChatMessage};
}> = ({messages}) => {
  return (
    <>
      {Object.values(messages)?.map((message) => (
        <ChatMessageContainer key={message.id} message={message} />
      ))}
    </>
  );
};
