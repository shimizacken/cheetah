import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/messagesLoader';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { ChatContainer } from './features/chat/components/ChatContainer';
import { SignInContainer } from './features/authentication';
import { selectShouldDisplayChat } from './features/authentication/users/state/usersSelectors';
import { MainLayout } from './features/layout/components/MainLayout';

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
    <MainLayout>
      <h1>🐆 Cheetah</h1>
      <SignInContainer />
      <div>{displayChat && <ChatContainer />}</div>
      <footer></footer>
    </MainLayout>
  );
};

export default App;
