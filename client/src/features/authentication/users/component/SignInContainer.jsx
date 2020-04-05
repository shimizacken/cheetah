import React, { useState } from 'react';
import { TextInput } from '../../../../components/common/inputs/textInput/TextInput';

export const SignInContainer = React.memo(({ userRef, text }) => {
  const [userName, setUserName] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ border: '1px solid red' }}></div>
      <TextInput type="submit" onChange={onChange} value={userName} placeholder="Type name and hit the enter!" />
    </form>
  );
});
