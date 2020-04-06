import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../authentication/users/state/usersSelectors';

export const ParticipantsContainer = () => {
  const users = useSelector(selectUsers);

  return (
    <div>
      {Object.values(users).map((user) => {
        return <div key={user.id}>{user.userName}</div>;
      })}
    </div>
  );
};
