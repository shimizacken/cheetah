import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChatContainer } from '../chat/components/ChatContainer';
import { ParticipantsContainer } from '../participants/components/ParticipantsContainer';
import { MainHeader } from '../layout/components/MainHeader';
import { SignedInWrapper } from '../layout/components/SignedInWrapper';
import { ChatTabsContainer } from '../chat/components/ChatTabsContainer';
import { Routes } from './routes';

export const ChatRouter = () => {
  return (
    <SignedInWrapper>
      <MainHeader displayMode={'collapse'} />
      <ChatTabsContainer />
      <Switch>
        <Route exact path={Routes.CHAT} component={ChatContainer} />
        <Route
          exact
          path={Routes.PARTICIPANTS}
          component={ParticipantsContainer}
        />
      </Switch>
    </SignedInWrapper>
  );
};
