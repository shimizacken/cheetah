import React from 'react';
import { Dot } from '../../../components/common/dot/Dot';
import styles from './ChatMessage.module.scss';

export const MessageHeader = React.memo(({ userName, active, date }) => (
  <div className={styles.header}>
    <span className={styles['user-name']}>
      {active && <Dot />} <span>{userName}</span>
    </span>
    <span className={styles['date']}>{date}</span>
  </div>
));
