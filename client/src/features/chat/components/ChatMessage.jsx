import React from 'react';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(({ userName, text, active, date }) => (
  <div className={styles['message-wrapper']}>
    <div className={styles['user-name']}>
      <span>{userName}</span>
      <span>{date}</span>
    </div>
    <div>{text}</div>
    {active && <div>active</div>}
  </div>
));
