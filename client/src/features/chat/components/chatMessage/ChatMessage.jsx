import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import { TextInputTypes } from '../../../../components/common/inputs/textInput/textInputTypes';
import { TextInput } from '../../../../components/common/inputs/textInput/TextInput';
import { CheckmarkButton, CancelButton } from '../messagePanel/EditButtons';
import { EditMessagePanel } from '../messagePanel/EditMessagePanel';
import { messagePropTypes } from './messagePropTypes';
import { MessageContentContainer } from './MessageContentContainer';
import styles from './ChatMessage.module.scss';

export const ChatMessage = ({
  message,
  userName,
  isCurrentUser,
  deleteMessageClick,
  updateMessage,
  date,
  active,
  darkTheme
}) => {
  const { id: messageId, text, edited, linkPreview } = message;
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const editChange = (e) => setEditedText(e.target.value);

  const editMessage = () => setIsEdit(true);

  const cancelEdit = () => {
    setIsEdit(false);
    setEditedText(text);
  };

  const updateMessageClick = () => {
    if (editedText !== text) {
      updateMessage(editedText);
      setIsEdit(false);
    } else {
      setIsEdit(false);
    }
  };

  return (
    <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
      <div className={styles['message-wrapper']}>
        <MessageHeader userName={userName} active={active} date={date} />
        {isEdit ? (
          <TextInput
            inputType={TextInputTypes.MULTILINE}
            onChange={editChange}
            value={editedText}
            className={styles['edit-text-input']}
          />
        ) : (
          <MessageContentContainer
            text={text}
            edited={edited}
            linkPreview={linkPreview}
            isCurrentUser={isCurrentUser}
            darkTheme={darkTheme}
          />
        )}
        <div className={styles['edit-panel']}>
          {isCurrentUser && !isEdit && (
            <EditMessagePanel
              editMessage={editMessage}
              cancelEdit={cancelEdit}
              updateMessageClick={updateMessageClick}
              deleteMessageClick={() => deleteMessageClick(messageId)}
              isEdit={isEdit}
              darkTheme={darkTheme}
            />
          )}
        </div>
        {isEdit && (
          <div className={styles['edit-panel-active']}>
            <CancelButton onClick={cancelEdit} />
            <CheckmarkButton onClick={() => updateMessageClick(messageId)} />
          </div>
        )}
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape(messagePropTypes),
  userName: PropTypes.string.isRequired,
  isCurrentUser: PropTypes.bool.isRequired,
  deleteMessageClick: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  darkTheme: PropTypes.bool
};

ChatMessage.defaultProps = {
  darkTheme: false
};
