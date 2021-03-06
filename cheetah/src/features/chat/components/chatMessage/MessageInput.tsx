import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {TextInput} from '../../../../components/common/inputs/textInput/TextInput';
import {publishMessage} from '../../state/chatMessagesActions';
import {selectCurrentUserId} from '../../../authentication/users/state/usersSelectors';
import {isTextEmpty} from '../../../../services';
import {buildNewMessage} from '../../bll/buildMessage';
import styles from '../ChatContainer.module.scss';

export const MessageInput: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const currentUserId = useSelector(selectCurrentUserId);
  const inputEl = useRef<HTMLInputElement>(null);

  const focusTextInput = () => {
    inputEl.current?.focus();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isTextEmpty(text)) {
      return;
    }

    const message = buildNewMessage(v4(), text, currentUserId, Date.now());

    dispatch(publishMessage(message));
    setText('');
  };

  useEffect(() => {
    focusTextInput();
  }, []);

  useEffect(() => {
    focusTextInput();
  });

  return (
    <div className={styles['text-input-wrapper']}>
      <form onSubmit={onSubmit}>
        <TextInput
          ref={inputEl}
          onChange={onChange}
          value={text}
          placeholder="Type a message!"
        />
      </form>
    </div>
  );
};
