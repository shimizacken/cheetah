import React, { useState } from 'react';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import { EditMessagePanel } from './EditMessagePanel';
import { CheckmarkButton } from './EditButtons';
import { TextInputTypes } from '../../../components/common/inputs/textInput/textInputTypes';
import { TextInput } from '../../../components/common/inputs/textInput/TextInput';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(
  ({ userName, text, active, date, isCurrentUser, deleteMessageClick, messageId, updateMessage, edited }) => {
    const [edit, setEdit] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const editChange = (e) => setEditedText(e.target.value);
    const editClick = (e) => setEdit(true);
    const updateMessageClick = () => {
      updateMessage(editedText);
      setEdit(false);
    };

    return (
      <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
        <div className={styles['message-wrapper']}>
          <MessageHeader userName={userName} active={active} date={date} />
          {edit ? (
            <div>
              <TextInput inputType={TextInputTypes.MULTILINE} onChange={editChange} value={editedText} />
              <CheckmarkButton onClick={updateMessageClick} />
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
              <EditMessagePanel
                updateMessageClick={editClick}
                deleteMessageClick={() => deleteMessageClick(messageId)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);
