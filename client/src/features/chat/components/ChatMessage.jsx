import React from 'react';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(({ userName, text, active }) => (
  <div className={styles['message-wrapper']}>
    <div className={styles['user-name']}>{userName}</div>
    <div>{text}</div>
    {active && <div>active</div>}
  </div>
));
