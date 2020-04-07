import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChatContainer } from '../chat/components/ChatContainer';
import { ParticipantsContainer } from '../participants/components/ParticipantsContainer';
import { MainHeader } from '../layout/components/MainHeader';
import { HeaderDisplayMode } from '../layout/bll/headerDisplayMode';
import { SignedInWrapper } from '../layout/components/SignedInWrapper';
import { ChatTabsContainer } from '../chat/components/ChatTabsContainer';

export const ChatRouter = () => {
  return (
    <SignedInWrapper>
      <MainHeader displayMode={HeaderDisplayMode.COLLAPSE} />
      <ChatTabsContainer />
      <Switch>
        <Route exact path="/chat" component={ChatContainer} />
        <Route exact path="/participants" component={ParticipantsContainer} />
      </Switch>
    </SignedInWrapper>
  );
};
