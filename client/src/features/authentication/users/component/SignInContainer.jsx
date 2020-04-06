import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from '../../../../components/common/inputs/textInput/TextInput';
import { setCurrentUserId, postUser } from '../state/usersActions';
import styles from './SignInContainer.module.scss';

export const SignInContainer = React.memo(({ userRef, text }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4();

    dispatch(setCurrentUserId(userId));

    dispatch(
      postUser({
        id: userId,
        userName,
        date: Date.now(),
        active: true
      })
    );
  };

  return (
    <div className={styles['sign-in-wrapper']}>
      <form onSubmit={onSubmit}>
        <TextInput
          type="submit"
          onChange={onChange}
          value={userName}
          className={styles['text-input']}
          placeholder="Type name and hit the enter!"
        />
      </form>
    </div>
  );
});
