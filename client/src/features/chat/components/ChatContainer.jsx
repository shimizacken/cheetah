import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from '../../../components/common/inputs/textInput/TextInput';
import { initChatWebSocket } from '../bll/network/messagesLoader';
import { useFetchChatMessages } from '../hooks/useFetchChatMessages';
import { ChatMessages } from './ChatMessages';
import { publishMessage } from '../state/chatMessagesActions';

export const ChatContainer = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const m = {
      id: uuidv4(),
      text: message,
      userRef: '1',
      date: Date.now,
      edited: false,
      deleted: false
    };

    dispatch(publishMessage(m));
    setMessage('');
  };

  useFetchChatMessages();

  useEffect(() => {
    initChatWebSocket();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div style={{ border: '1px solid red' }}>
        <ChatMessages />
      </div>
      <TextInput type="submit" onChange={onChange} value={message || ''} />
    </form>
  );
};
