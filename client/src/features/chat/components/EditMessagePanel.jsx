import React from 'react';
import { DeleteButton, EditButton, CheckmarkButton } from './DeleteButton';
import styles from './EditMessagePanel.module.scss';

export const EditMessagePanel = React.memo(({ updateMessageClick, deleteMessageClick, messageId }) => (
  <div className={styles['edit-message-wrapper']}>
    <EditButton onClick={() => updateMessageClick(messageId)} />
    <CheckmarkButton onClick={() => updateMessageClick(messageId)} />
    <DeleteButton onClick={() => deleteMessageClick(messageId)} />
  </div>
));
