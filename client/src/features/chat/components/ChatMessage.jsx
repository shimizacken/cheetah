import React from 'react';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import styles from './ChatMessage.module.scss';

export const ChatMessage = React.memo(
  ({ userName, text, active, date, isCurrentUser, deleteMessageClick, messageId }) => (
    <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
      <div className={styles['message-wrapper']}>
        <MessageHeader userName={userName} active={active} date={date} />
        <div className={classNames(styles['content'], isCurrentUser && styles['current-user-message'])}>
          {text}
          {isCurrentUser && (
            <span onClick={() => deleteMessageClick(messageId)} className={styles['delete']}>
              X
            </span>
          )}
        </div>
      </div>
    </div>
  )
);
