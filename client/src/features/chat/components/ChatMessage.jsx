import React from 'react';
import classNames from 'classnames';
import { Dot } from '../../../components/common/dot/Dot';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(({ userName, text, active, date, isCurrentUser }) => (
  <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-position'])}>
    <div className={styles['message-wrapper']}>
      <div className={styles.header}>
        <span className={styles['user-name']}>
          {active && <Dot />} {userName}
        </span>
        <span className={styles['date']}>{date}</span>
      </div>
      <div className={styles['content']}>{text}</div>
    </div>
  </div>
));
