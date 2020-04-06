import React from 'react';
import { useSelector } from 'react-redux';
import { ChatMessage } from './ChatMessage';
import { selectUser, selectIsCurrentUser } from '../../authentication/users/state/usersSelectors';
import { DeletedMessage } from './DeletedMessage';

export const ChatMessageContainer = React.memo(({ userRef, text, date, deleted }) => {
  const user = useSelector(selectUser(userRef));
  const isCurrentUser = useSelector(selectIsCurrentUser(userRef));
  const formattedDate = new Date(date).toLocaleTimeString();

  if (deleted) {
    return <DeletedMessage userName={user?.userName} date={formattedDate} />;
  }

  return (
    <ChatMessage
      text={text}
      userName={user?.userName}
      active={user?.active}
      date={formattedDate}
      isCurrentUser={isCurrentUser}
    />
  );
});
