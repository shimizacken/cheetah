import React from 'react';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import styles from './ChatMessage.module.scss';
import { DeleteButton } from './DeleteButton';

export const ChatMessage = React.memo(
  ({ userName, text, active, date, isCurrentUser, deleteMessageClick, messageId }) => (
    <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
      <div className={styles['message-wrapper']}>
        <MessageHeader userName={userName} active={active} date={date} />
        <div className={classNames(styles['content'], isCurrentUser && styles['current-user-message'])}>
          {text}
          {isCurrentUser && <DeleteButton onClick={() => deleteMessageClick(messageId)} />}
        </div>
      </div>
    </div>
  )
);
