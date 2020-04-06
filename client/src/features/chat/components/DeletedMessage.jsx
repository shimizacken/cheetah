import React from 'react';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import styles from './ChatMessage.module.scss';

export const DeletedMessage = React.memo(({ userName, active, isCurrentUser, date }) => (
  <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
    <div className={styles['message-wrapper']}>
      <MessageHeader userName={userName} active={active} date={date} />
      <div className={classNames(styles['content'], styles['deleted'])}>The message has deleted</div>
    </div>
  </div>
));
