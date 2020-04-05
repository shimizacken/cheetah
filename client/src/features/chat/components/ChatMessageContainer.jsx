import React from 'react';
import { useSelector } from 'react-redux';
import { ChatMessage } from './ChatMessage';

export const ChatMessageContainer = React.memo(({ userRef, text }) => {
  const user = useSelector((state) => state?.users?.[userRef]);

  return <ChatMessage text={text} userName={user?.userName} active={user?.active} />;
});
