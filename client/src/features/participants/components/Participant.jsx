import React from 'react';
import { Dot } from '../../../components/common/dot/Dot';
import styles from './Participant.module.scss';

export const Participant = React.memo(({ userName, active }) => {
  return (
    <div className={styles['participant']}>
      {active && <Dot />} {userName}
    </div>
  );
});
