import React from 'react';
import {useSelector} from 'react-redux';
import {MainLayout} from './features/layout/components/MainLayout';
import {RootRouter} from './features/routings/RootRouter';
import {AuthenticationRouter} from './features/authentication/routing/AuthenticationRouter';
import {Theme} from './features/theme';
import {selectIsUserOnline} from './features/authentication';
import {ToggleThemeStickyContainer} from './features/theme/components/ToggleThemeStickyContainer';
import {useSavannahSocket} from './features/hooks/useSavannahSocket';
import {State} from './state/store.types';

export const RootComponent: React.FC = () => {
  const isUserOnline = useSelector(selectIsUserOnline);
  const isAuthenticated = useSelector(
    (state: State) => state.authentication.authenticated
  );

  useSavannahSocket();

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
