import React from 'react';
import classNames from 'classnames';
import { Dot } from '../../../components/common/dot/Dot';
import styles from './ChatMessage.module.scss';

export const DeletedMessage = React.memo(({ userName, active, date }) => (
  <div className={styles['message-root-wrapper']}>
    <div className={styles['message-wrapper']}>
      <div className={styles.header}>
        <span className={styles['user-name']}>
          {active && <Dot />} <span>{userName}</span>
        </span>
        <span className={styles['date']}>{date}</span>
      </div>
      <div className={classNames(styles['content'], styles['deleted'])}>The message has deleted</div>
    </div>
  </div>
));
