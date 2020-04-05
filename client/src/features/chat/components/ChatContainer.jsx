import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from '../../../components/common/inputs/textInput/TextInput';
import { initChatWebSocket } from '../bll/network/messagesLoader';
import { useFetchChatMessages } from '../hooks/useFetchChatMessages';
import { ChatMessages } from './ChatMessages';
import { publishMessage } from '../state/chatMessagesActions';
import { selectCurrentUserId } from '../../authentication/users/state/usersSelectors';

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
    <form onSubmit={onSubmit}>
      <div>
        <ChatMessages />
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <TextInput type="submit" onChange={onChange} value={text} />
      </div>
    </form>
  );
};
