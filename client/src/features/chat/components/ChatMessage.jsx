import React, { useState } from 'react';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import { EditMessagePanel } from './EditMessagePanel';
import { TextInputTypes } from '../../../components/common/inputs/textInput/textInputTypes';
import { TextInput } from '../../../components/common/inputs/textInput/TextInput';
import styles from './ChatMessage.module.scss';
import { CancelButton, CheckmarkButton } from './EditButtons';

export const ChatMessage = React.memo(
  ({
    userName,
    text,
    active,
    date,
    isCurrentUser,
    deleteMessageClick,
    messageId,
    updateMessage,
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
  }
);
