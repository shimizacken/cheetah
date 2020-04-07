import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import { TextInputTypes } from '../../../../components/common/inputs/textInput/textInputTypes';
import { TextInput } from '../../../../components/common/inputs/textInput/TextInput';
import { CheckmarkButton, CancelButton } from '../messagePanel/EditButtons';
import { EditMessagePanel } from '../messagePanel/EditMessagePanel';
import styles from './ChatMessage.module.scss';

export const ChatMessage = ({
  userName,
  text,
  date,
  isCurrentUser,
  deleteMessageClick,
  messageId,
  updateMessage,
  active,
  edited,
  darkTheme
}) => {
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
          <div
            className={classNames(
              styles['content'],
              isCurrentUser && styles['current-user-message'],
              darkTheme && styles['dark']
            )}
          >
            <div>{text}</div>
            {edited && (
              <div className={styles['edited']}>
                <i>(edited)</i>
              </div>
            )}
          </div>
        )}
        <div className={styles['edit-panel']}>
          {isCurrentUser && !isEdit && (
            <EditMessagePanel
              editMessage={editMessage}
              cancelEdit={cancelEdit}
              updateMessageClick={updateMessageClick}
              deleteMessageClick={() => deleteMessageClick(messageId)}
              isEdit={isEdit}
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
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isCurrentUser: PropTypes.bool.isRequired,
  deleteMessageClick: PropTypes.func.isRequired,
  messageId: PropTypes.string.isRequired,
  updateMessage: PropTypes.func.isRequired,
  active: PropTypes.bool,
  edited: PropTypes.bool,
  darkTheme: PropTypes.bool
};

ChatMessage.defaultProps = {
  active: true,
  edited: false,
  darkTheme: false
};
