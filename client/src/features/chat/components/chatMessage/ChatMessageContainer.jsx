import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ChatMessage } from './ChatMessage';
import { selectUser, selectIsCurrentUser } from '../../../authentication/users/state/usersSelectors';
import { deleteMessage, editMessage } from '../../state/chatMessagesActions';
import { selectIsDarkMode } from '../../../theme/state/themeSelectors';
import { messagePropTypes } from './messagePropTypes';
import { DeletedMessage } from './DeletedMessage';

export const ChatMessageContainer = ({ message }) => {
  const dispatch = useDispatch();
  const { userRef, date, deleted } = message;

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
    return <DeletedMessage userName={user?.userName} isCurrentUser={isCurrentUser} date={formattedDate} active={user?.active} />;
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

ChatMessageContainer.propTypes = {
  message: PropTypes.shape(messagePropTypes).isRequired
};
