import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from '../../../components/common/inputs/textInput/TextInput';
import { initChatWebSocket } from '../bll/network/messagesLoader';
import { useFetchChatMessages } from '../hooks/useFetchChatMessages';
import { ChatMessages } from './ChatMessages';
import { publishMessage } from '../state/chatMessagesActions';
import { selectCurrentUserId } from '../../authentication/users/state/usersSelectors';
import styles from './ChatContainer.module.scss';

export const ChatContainer = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const currentUserId = useSelector(selectCurrentUserId);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('currentUserId', currentUserId);
    const message = {
      id: uuidv4(),
      text: text,
      userRef: currentUserId,
      date: Date.now(),
      edited: false,
      deleted: false
    };

    dispatch(publishMessage(message));
    setText('');
  };

  useFetchChatMessages();

  useEffect(() => {
    initChatWebSocket();
  }, []);

  return (
    <div className={styles['chat-wrapper']}>
      <div className={styles['messages']}>
        <ChatMessages />
      </div>
      <div className={styles['text-input']}>
        <form onSubmit={onSubmit}>
          <TextInput type="submit" onChange={onChange} value={text} placeholder="Type a message!" />
        </form>
      </div>
    </div>
  );
};
