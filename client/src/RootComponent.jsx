import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initChatWebSocket, closeChatWebSocket } from './features/chat/bll/network/messagesLoader';
import { initChatUsers } from './features/authentication/users/bll/network/usersLoader';
import { MainLayout } from './features/layout/components/MainLayout';
import { RootRouter } from './features/routings/RootRouter';
import { AuthenticationRouter } from './features/authentication/routing/AuthenticationRouter';
import { Theme } from './features/theme';
import { selectIsUserOnline } from './features/authentication';
import { ToggleThemeStickyContainer } from './features/theme/components/ToggleThemeStickyContainer';

export const RootComponent = () => {
  const isUserOnline = useSelector(selectIsUserOnline);

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
        {!isUserOnline && <ToggleThemeStickyContainer />}
        <AuthenticationRouter />
        <RootRouter />
        <footer />
      </MainLayout>
    </Theme>
  );
};
