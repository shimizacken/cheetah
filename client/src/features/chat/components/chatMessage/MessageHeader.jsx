import React from 'react';
import PropTypes from 'prop-types';
import { ActiveUserDot } from '../../../authentication/users/component/ActiveUserDot';
import styles from './ChatMessage.module.scss';

export const MessageHeader = React.memo(({ userName, active, date }) => (
  <div className={styles.header}>
    <span className={styles['user-name']}>
      <ActiveUserDot active={active} /> <span>{userName}</span>
    </span>
    <span className={styles['date']}>{date}</span>
  </div>
));

MessageHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired
};
