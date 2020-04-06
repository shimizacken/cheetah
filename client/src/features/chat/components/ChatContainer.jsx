import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from '../../../components/common/inputs/textInput/TextInput';
import { initChatWebSocket } from '../bll/network/messagesLoader';
import { useFetchChatMessages } from '../hooks/useFetchChatMessages';
import { ChatMessages } from './ChatMessages';
import { publishMessage } from '../state/chatMessagesActions';
import { selectCurrentUserId, selectUsers } from '../../authentication/users/state/usersSelectors';
import styles from './ChatContainer.module.scss';
import { Tabs } from '../../../components/common/tabs/Tabs';

export const ChatContainer = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [selectedTab, setSelectedTab] = useState(2);
  const currentUserId = useSelector(selectCurrentUserId);
  const users = useSelector(selectUsers);
  const messages = useSelector((state) => state?.chat?.messages);
  const bottomEl = useRef(null);
  const inputEl = useRef(null);

  const chatTabs = [
    {
      id: 1,
      text: `Participants (${Object.values(users).length})`,
      selected: false
    },
    {
      id: 2,
      text: 'Chat',
      selected: true
    }
  ];

  const [tabs, setTabs] = useState(chatTabs);

  const tabClick = (e) => {
    setSelectedTab(e.target.value);

    const newTabs = tabs.map((tab) => {
      if (tab.id === parseInt(e.target.value)) {
        return {
          ...tab,
          selected: true
        };
      }

      return {
        ...tab,
        selected: false
      };
    });

    setTabs(newTabs);
  };

  const scrollAndFocus = () => {
    bottomEl.current.scrollIntoView({ behavior: 'smooth' });
    inputEl.current.focus();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
    scrollAndFocus();
  }, []);

  useEffect(() => {
    scrollAndFocus();
  });

  return (
    <div className={styles['chat-wrapper']}>
      <Tabs tabs={tabs} onClick={tabClick} />
      <div className={styles['messages']}>
        <ChatMessages messages={messages} />
        <div ref={bottomEl} />
      </div>
      <div className={styles['text-input-wrapper']}>
        <form onSubmit={onSubmit}>
          <TextInput ref={inputEl} type="submit" onChange={onChange} value={text} placeholder="Type a message!" />
        </form>
      </div>
    </div>
  );
};
