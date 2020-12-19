import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ChatMessage} from './ChatMessage';
import {
  selectUser,
  selectIsCurrentUser
} from '../../../authentication/users/state/usersSelectors';
import {deleteMessage, editMessage} from '../../state/chatMessagesActions';
import {selectIsDarkMode} from '../../../theme/state/themeSelectors';
import {DeletedMessage} from './DeletedMessage';
import type {ChatMessage as ChatMessageType} from '../../../../packages/socket/savannah.types';

export const ChatMessageContainer: React.FC<{message: ChatMessageType}> = ({
  message
}) => {
  const dispatch = useDispatch();
  const {userRef, date, deleted} = message;

  const user = useSelector(selectUser(userRef));
  const isCurrentUser = useSelector(selectIsCurrentUser(userRef));
  const isDarkMode = useSelector(selectIsDarkMode);
  const formattedDate = new Date(date).toLocaleTimeString();

  const deleteMessageClick = (messageId: string) =>
    dispatch(deleteMessage(messageId));

  const updateMessageClick = (editedText: string) =>
    dispatch(
      editMessage({
        ...message,
        text: editedText,
        edited: true
      })
    );

  if (deleted) {
    return (
      <DeletedMessage
        userName={user?.userName}
        isCurrentUser={isCurrentUser}
        date={formattedDate}
        active={user?.active}
        darkTheme={isDarkMode}
      />
    );
  }

  return (
    <ChatMessage
      message={message}
      userName={user?.userName}
      active={user?.active}
      date={formattedDate}
      isCurrentUser={isCurrentUser}
      deleteMessageClick={deleteMessageClick}
      updateMessage={updateMessageClick}
      darkTheme={isDarkMode}
    />
  );
};
