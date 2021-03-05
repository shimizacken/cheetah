import React from 'react';
import {ChatMessageContainer} from '../chatMessage/ChatMessageContainer';
import type {ChatMessage} from '../../../../packages/socket/savannah.types';

export const ChatMessages: React.FC<{
  messages: {[key: string]: ChatMessage};
}> = ({messages}) => (
  <>
    {Object.values(messages)?.map((message) => (
      <ChatMessageContainer key={message.id} message={message} />
    ))}
  </>
);
