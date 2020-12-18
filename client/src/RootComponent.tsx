import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  initChatWebSocket,
  closeChatWebSocket
} from './features/chat/bll/network/messagesLoader';
import {initChatUsers} from './features/authentication/users/bll/network/usersLoader';
import {MainLayout} from './features/layout/components/MainLayout';
import {RootRouter} from './features/routings/RootRouter';
import {AuthenticationRouter} from './features/authentication/routing/AuthenticationRouter';
import {Theme} from './features/theme';
import {selectIsUserOnline} from './features/authentication';
import {ToggleThemeStickyContainer} from './features/theme/components/ToggleThemeStickyContainer';
import {createSocket} from './packages/socket';
import {useSavannahSocket} from './features/hooks/useSavannahSocket';

export const RootComponent: React.FC = () => {
  const isUserOnline = useSelector(selectIsUserOnline);

  useSavannahSocket();

  useEffect(() => {
    // initChatWebSocket();
    // initChatUsers();
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
