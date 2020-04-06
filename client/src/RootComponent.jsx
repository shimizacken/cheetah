import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/messagesLoader';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { selectShouldDisplayChat } from './features/authentication/users/state/usersSelectors';
import { MainLayout } from './features/layout/components/MainLayout';
import { MainHeader } from './features/layout/components/MainHeader';
import { HeaderDisplayMode } from './features/layout/bll/headerDisplayMode';
import { RootRouter } from './features/routings/RootRouter';
import { AuthenticationRouter } from './features/authentication/routing/AuthenticationRouter';

export const RootComponent = () => {
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
      <MainHeader mode={displayChat ? HeaderDisplayMode.COLLAPSE : HeaderDisplayMode.DEFAULT} />
      <AuthenticationRouter />
      <RootRouter />
      <footer></footer>
    </MainLayout>
  );
};
