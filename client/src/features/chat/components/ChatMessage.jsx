import React, { useState } from 'react';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import { EditMessagePanel } from './EditMessagePanel';
import styles from './ChatMessage.module.scss';
import { CheckmarkButton } from './DeleteButton';

export const ChatMessage = React.memo(
  ({ userName, text, active, date, isCurrentUser, deleteMessageClick, messageId, updateMessage, edited }) => {
    const [edit, setEdit] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const editChange = (e) => setEditedText(e.target.value);
    const editClick = (e) => setEdit(true);

    return (
      <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
        <div className={styles['message-wrapper']}>
          <MessageHeader userName={userName} active={active} date={date} />
          {edit ? (
            <div>
              <textarea onChange={editChange} value={editedText} />
              <CheckmarkButton onClick={() => updateMessage(editedText)} />
            </div>
          ) : (
            <div className={classNames(styles['content'], isCurrentUser && styles['current-user-message'])}>
              <div>{text}</div>
              {edited && (
                <div className={styles['edited']}>
                  <i>(edited)</i>
                </div>
              )}
            </div>
          )}
          <div className={styles['edit-panel']}>
            {isCurrentUser && (
              <EditMessagePanel updateMessageClick={editClick} onClick={() => deleteMessageClick(messageId)} />
            )}
          </div>
        </div>
      </div>
    );
  }
);
