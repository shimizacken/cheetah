import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChatMessage } from './ChatMessage';
import { selectUser, selectIsCurrentUser } from '../../authentication/users/state/usersSelectors';
import { DeletedMessage } from './DeletedMessage';
import { deleteMessage, editMessage } from '../state/chatMessagesActions';
import { selectIsDarkMode } from '../../theme/state/themeSelectors';
import { ThemeTypes } from '../../theme/bll/themeTypes';

export const ChatMessageContainer = React.memo(({ message }) => {
  const dispatch = useDispatch();
  const { id: messageId, userRef, text, date, deleted, edited } = message;

  const user = useSelector(selectUser(userRef));
  const isCurrentUser = useSelector(selectIsCurrentUser(userRef));
  const isDarkMode = useSelector(selectIsDarkMode);
  const formattedDate = new Date(date).toLocaleTimeString();

  const deleteMessageClick = (messageId) => dispatch(deleteMessage(messageId));

  const updateMessageClick = (editedText) =>
    dispatch(
      editMessage({
        ...message,
        text: editedText,
        edited: true
      })
    );

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
      updateMessage={updateMessageClick}
      edited={edited}
      darkTheme={isDarkMode}
    />
  );
});
