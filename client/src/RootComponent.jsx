import React, { useEffect } from 'react';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/messagesLoader';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { MainLayout } from './features/layout/components/MainLayout';
import { RootRouter } from './features/routings/RootRouter';
import { AuthenticationRouter } from './features/authentication/routing/AuthenticationRouter';
import { Theme, ToggleTheme } from './features/theme';

export const RootComponent = () => {
  useEffect(() => {
    initChatWebSocket();
    initChatUsers();

    return () => {
      closeChatWebSocket();
    };
  }, []);

  return (
    <Theme>
      <MainLayout>
        <ToggleTheme />
        <AuthenticationRouter />
        <RootRouter />
        <footer />
      </MainLayout>
    </Theme>
  );
};
