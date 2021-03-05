import React, {useState} from 'react';
import classNames from 'classnames';
import {MessageHeader} from './MessageHeader';
import {CheckmarkButton, CancelButton} from '../messagePanel/EditButtons';
import {EditMessagePanel} from '../messagePanel/EditMessagePanel';
import {MessageContentContainer} from './MessageContentContainer';
import {TextArea} from '../../../../components/common/inputs/textInput/TextArea';
import type {ChatMessage as ChatMessageType} from '../../../../packages/socket/savannah.types';

import styles from './ChatMessage.module.scss';

export const ChatMessage: React.FC<{
  message: ChatMessageType;
  userName: string;
  isCurrentUser: boolean;
  deleteMessageClick: (id: string) => void;
  updateMessage: (editedText: string) => void;
  date: string;
  active: boolean;
  darkTheme: boolean;
}> = ({
  message,
  userName,
  isCurrentUser,
  deleteMessageClick,
  updateMessage,
  date,
  active,
  darkTheme = false
}) => {
  const {id: messageId, text, edited, linkPreview} = message;
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const editChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setEditedText(e.target.value);

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
    <div
      className={classNames(
        styles['message-root-wrapper'],
        isCurrentUser && styles['current-user-message']
      )}
    >
      <div className={styles['message-wrapper']}>
        <MessageHeader userName={userName} active={active} date={date} />
        {isEdit ? (
          <TextArea
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
              messageId={messageId}
              editMessage={editMessage}
              deleteMessageClick={() => deleteMessageClick(messageId)}
              darkTheme={darkTheme}
            />
          )}
        </div>
        {isEdit && (
          <div className={styles['edit-panel-active']}>
            <CancelButton onClick={cancelEdit} />
            <CheckmarkButton onClick={updateMessageClick} />
          </div>
        )}
      </div>
    </div>
  );
};
