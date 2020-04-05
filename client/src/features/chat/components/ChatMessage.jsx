import React from 'react';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(({ displayName, text, active }) => (
  <div className={styles['message-wrapper']}>
    <div className={styles['user-name']}>{displayName}</div>
    <div>{text}</div>
    {active && <div>active</div>}
  </div>
));
