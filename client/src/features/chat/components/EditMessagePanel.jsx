import React from 'react';
import { DeleteButton, EditButton } from './EditButtons';
import styles from './EditMessagePanel.module.scss';

export const EditMessagePanel = ({ editMessage, deleteMessageClick, messageId }) => {
  return (
    <div className={styles['edit-message-wrapper']}>
      <EditButton onClick={() => editMessage()} />
      <DeleteButton onClick={() => deleteMessageClick(messageId)} />
    </div>
  );
};
