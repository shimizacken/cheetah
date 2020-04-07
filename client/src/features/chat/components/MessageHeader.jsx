import React from 'react';
import { ActiveUserDot } from '../../authentication/users/component/ActiveUserDot';
import styles from './ChatMessage.module.scss';

export const MessageHeader = React.memo(({ userName, active, date }) => (
  <div className={styles.header}>
    <span className={styles['user-name']}>
      <ActiveUserDot active={active} /> <span>{userName}</span>
    </span>
    <span className={styles['date']}>{date}</span>
  </div>
));
