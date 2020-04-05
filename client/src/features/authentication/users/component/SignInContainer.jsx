import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from '../../../../components/common/inputs/textInput/TextInput';
import { addUser } from '../state/usersActions';

export const SignInContainer = React.memo(({ userRef, text }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4();
    dispatch(
      addUser({
        [userId]: {
          id: uuidv4(),
          userName,
          date: Date.now,
          active: true
        }
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput type="submit" onChange={onChange} value={userName} placeholder="Type name and hit the enter!" />
    </form>
  );
});
