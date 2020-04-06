import React from 'react';
import { DeleteButton, EditButton, CheckmarkButton } from './EditButtons';
import styles from './EditMessagePanel.module.scss';

export const EditMessagePanel = ({ editClick, updateMessageClick, deleteMessageClick, messageId, isEdit }) => (
  <div className={styles['edit-message-wrapper']}>
    {isEdit ? (
      <CheckmarkButton onClick={() => updateMessageClick(messageId)} />
    ) : (
      <>
        <EditButton onClick={() => editClick()} />
        <DeleteButton onClick={() => deleteMessageClick(messageId)} />
      </>
    )}
  </div>
);
