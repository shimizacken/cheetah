import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectUsers } from '../../authentication/users/state/usersSelectors';
import { Participant } from './Participant';
import { selectIsDarkMode } from '../../theme/state/themeSelectors';
import styles from './ParticipantsContainer.module.scss';

export const ParticipantsContainer = () => {
  const users = useSelector(selectUsers);
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div className={classNames(styles['participants-wrapper'], isDarkMode && styles['dark'])}>
      {Object.values(users).map((user) => {
        return <Participant key={user.id} userName={user.userName} active={user.active} darkTheme={isDarkMode} />;
      })}
    </div>
  );
};
