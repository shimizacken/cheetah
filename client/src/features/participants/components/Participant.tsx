import React from 'react';
import classNames from 'classnames';
import {ActiveUserDot} from '../../authentication/users/component/ActiveUserDot';
import styles from './Participant.module.scss';

export const Participant: React.FC<{
  userName: string;
  active: boolean;
  darkTheme: boolean;
}> = ({userName, active, darkTheme}) => (
  <div className={classNames(styles.participant, darkTheme && styles.dark)}>
    <ActiveUserDot active={active} /> {userName}
  </div>
);
