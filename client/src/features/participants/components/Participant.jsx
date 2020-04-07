import React from 'react';
import classNames from 'classnames';
import { ActiveUserDot } from '../../authentication/users/component/ActiveUserDot';
import styles from './Participant.module.scss';

export const Participant = React.memo(({ userName, active, darkTheme }) => {
  return (
    <div className={classNames(styles['participant'], darkTheme && styles['dark'])}>
      <ActiveUserDot active={active} /> {userName}
    </div>
  );
});
