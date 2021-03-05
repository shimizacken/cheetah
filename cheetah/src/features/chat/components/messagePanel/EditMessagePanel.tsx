import React from 'react';
import {EditButton, DeleteButton} from './EditButtons';
import styles from './EditMessagePanel.module.scss';

export const EditMessagePanel: React.FC<{
  messageId: string;
  deleteMessageClick: (messageId: string) => void;
  editMessage: () => void;
  darkTheme: boolean;
}> = ({messageId, deleteMessageClick, editMessage, darkTheme = false}) => (
  <div className={styles['edit-message-wrapper']}>
    <EditButton onClick={editMessage} darkTheme={darkTheme} />
    <DeleteButton
      onClick={() => deleteMessageClick(messageId)}
      darkTheme={darkTheme}
    />
  </div>
);
