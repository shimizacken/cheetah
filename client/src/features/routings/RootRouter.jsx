import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignInContainer } from '../authentication';
import { ChatContainer } from '../chat/components/ChatContainer';

export const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/sign-in" component={SignInContainer} />
      <Route exact path="/chat" component={ChatContainer} />
      <Route exact path="/participants" component={ChatContainer} />
    </Switch>
  );
};
