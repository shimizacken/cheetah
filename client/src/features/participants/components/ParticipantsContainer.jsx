import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../authentication/users/state/usersSelectors';
import { Participant } from './Participant';
import styles from './ParticipantsContainer.module.scss';

export const ParticipantsContainer = () => {
  const users = useSelector(selectUsers);

  return (
    <div className={styles['participants-wrapper']}>
      {Object.values(users).map((user) => {
        return <Participant key={user.id} userName={user.userName} active={user.active} />;
      })}
    </div>
  );
};
