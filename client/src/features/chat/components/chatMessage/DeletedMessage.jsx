import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MessageHeader } from './MessageHeader';
import styles from './ChatMessage.module.scss';

export const DeletedMessage = React.memo(({ userName, active, isCurrentUser, date, darkTheme }) => (
  <div className={classNames(styles['message-root-wrapper'], isCurrentUser && styles['current-user-message'])}>
    <div className={styles['message-wrapper']}>
      <MessageHeader userName={userName} active={active} date={date} />
      <div className={classNames(styles['content'], styles['deleted'], darkTheme && styles['dark'])}>
        This message has been deleted
      </div>
    </div>
  </div>
));

DeletedMessage.propTypes = {
  userName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  isCurrentUser: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  darkTheme: PropTypes.bool.isRequired
};

DeletedMessage.defaultProps = {
  active: true,
  darkTheme: false
};
