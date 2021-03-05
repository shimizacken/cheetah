import React from 'react';
import {ActiveUserDot} from '../../../authentication/users/component/ActiveUserDot';
import styles from './ChatMessage.module.scss';

const MessageHeader: React.FC<{
  userName: string;
  active: boolean;
  date: string;
}> = ({userName, active, date}) => (
  <div className={styles.header}>
    <span className={styles['user-name']}>
      <ActiveUserDot active={active} /> <span>{userName}</span>
    </span>
    <span className={styles['date']}>{date}</span>
  </div>
);

const memoized = React.memo(MessageHeader);

export {memoized as MessageHeader};
