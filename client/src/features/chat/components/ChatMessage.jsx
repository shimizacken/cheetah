import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(({ userRef, text }) => {
  const user = useSelector((state) => state?.users?.[userRef]);

  return (
    <div className={styles['message-wrapper']}>
      <div className={styles['user-name']}>{user?.displayName}</div>
      <div>{text}</div>
      {user?.active && <div>active</div>}
    </div>
  );
});
