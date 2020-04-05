import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/ws';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { ChatContainer } from './features/chat/components/ChatContainer';

export const App = () => {
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
        <div>Cheetah</div>
        <div>
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
