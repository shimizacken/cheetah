import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/messagesLoader';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { ChatContainer } from './features/chat/components/ChatContainer';
import { SignInContainer } from './features/authentication';
import { useSelector } from 'react-redux';
import { selectShouldDisplayChat } from './features/authentication/users/state/usersSelectors';

export const App = () => {
  const displayChat = useSelector(selectShouldDisplayChat);

  useEffect(() => {
    initChatWebSocket();
    initChatUsers();

    return () => {
      closeChatWebSocket();
    };
  }, []);

  return (
    <div className={styles['root-wrapper']}>
      <div>
        <h1>🐆 Cheetah</h1>
        <SignInContainer />
        <div>{displayChat && <ChatContainer />}</div>
      </div>
    </div>
  );
};

export default App;
