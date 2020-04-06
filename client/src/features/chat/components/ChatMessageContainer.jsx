import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChatMessage } from './ChatMessage';
import { selectUser, selectIsCurrentUser } from '../../authentication/users/state/usersSelectors';
import { DeletedMessage } from './DeletedMessage';
import { deleteMessage } from '../state/chatMessagesActions';

export const ChatMessageContainer = React.memo(({ messageId, userRef, text, date, deleted }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser(userRef));
  const isCurrentUser = useSelector(selectIsCurrentUser(userRef));
  const formattedDate = new Date(date).toLocaleTimeString();

  const deleteMessageClick = (messageId) => dispatch(deleteMessage(messageId));

  if (deleted) {
    return <DeletedMessage userName={user?.userName} isCurrentUser={isCurrentUser} date={formattedDate} />;
  }

  return (
    <ChatMessage
      text={text}
      userName={user?.userName}
      active={user?.active}
      date={formattedDate}
      isCurrentUser={isCurrentUser}
      messageId={messageId}
      deleteMessageClick={deleteMessageClick}
    />
  );
});
