import React from 'react';
import classNames from 'classnames';
import { Dot } from '../../../components/common/dot/Dot';
import styles from './Participant.module.scss';

export const Participant = React.memo(({ userName, active, darkTheme }) => {
  return (
    <div className={classNames(styles['participant'], darkTheme && styles['dark'])}>
      {active && <Dot />} {userName}
    </div>
  );
});
