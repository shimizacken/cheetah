import React from 'react';
import PropTypes from 'prop-types';
import { EditButton, DeleteButton } from './EditButtons';
import styles from './EditMessagePanel.module.scss';

export const EditMessagePanel = ({ messageId, deleteMessageClick, editMessage, darkTheme }) => {
  return (
    <div className={styles['edit-message-wrapper']}>
      <EditButton onClick={() => editMessage()} />
      <DeleteButton onClick={() => deleteMessageClick(messageId)} darkTheme={darkTheme} />
    </div>
  );
};

EditMessagePanel.propTypes = {
  messageId: PropTypes.string,
  deleteMessageClick: PropTypes.func,
  editMessage: PropTypes.func
};

EditMessagePanel.defaultProps = {
  messageId: undefined,
  deleteMessageClick: undefined,
  editMessage: undefined
};
