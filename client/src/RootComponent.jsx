import React, { useEffect } from 'react';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/messagesLoader';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { MainLayout } from './features/layout/components/MainLayout';
import { RootRouter } from './features/routings/RootRouter';
import { AuthenticationRouter } from './features/authentication/routing/AuthenticationRouter';

export const RootComponent = () => {
  useEffect(() => {
    initChatWebSocket();
    initChatUsers();

    return () => {
      closeChatWebSocket();
    };
  }, []);

  return (
    <MainLayout>
      <AuthenticationRouter />
      <RootRouter />
      <footer />
    </MainLayout>
  );
};
