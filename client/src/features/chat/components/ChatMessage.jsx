import React from 'react';
import { Dot } from '../../../components/common/dot/Dot';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(({ userName, text, active, date }) => (
  <div className={styles['message-wrapper']}>
    <div className={styles['user-name']}>
      <span>{userName}</span>
      <span>{date}</span>
    </div>
    <div className={styles['content']}>{text}</div>
    {active && <Dot />}
  </div>
));
