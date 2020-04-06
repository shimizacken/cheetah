import React from 'react';
import { DeleteButton, EditButton, CheckmarkButton, CancelButton } from './EditButtons';
import styles from './EditMessagePanel.module.scss';

export const EditMessagePanel = ({
  editMessage,
  cancelEdit,
  updateMessageClick,
  deleteMessageClick,
  messageId,
  isEdit
}) => {
  if (isEdit) {
    return (
      <>
        <CancelButton onClick={cancelEdit} />
        <CheckmarkButton onClick={() => updateMessageClick(messageId)} />
      </>
    );
  }

  return (
    <div className={styles['edit-message-wrapper']}>
      <>
        <EditButton onClick={() => editMessage()} />
        <DeleteButton onClick={() => deleteMessageClick(messageId)} />
      </>
    </div>
  );
};
