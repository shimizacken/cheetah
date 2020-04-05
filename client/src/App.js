import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { initChatWebSocket, closeChatWebSocket, postMessage } from './features/chat/bll/network/ws';

function App() {
  useEffect(() => {
    initChatWebSocket();

    postMessage('cool!!1113333');

    return () => {
      closeChatWebSocket();
    };
  }, []);

  return <div className={styles['root-wrapper']}>Cheetah</div>;
}

export default App;
