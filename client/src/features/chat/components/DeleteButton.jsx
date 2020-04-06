import React from 'react';
import styles from './ChatMessage.module.scss';

export const DeleteButton = React.memo(({ onClick }) => (
  <span onClick={onClick} className={styles['delete']}>
    X
  </span>
));
