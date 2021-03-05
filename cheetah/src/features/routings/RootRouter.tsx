import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {SignInContainer} from '../authentication';
import {ChatRouter} from './ChatRouter';

export const RootRouter: React.FC = () => (
  <Switch>
    <Route exact path="/sign-in" component={SignInContainer} />
    <ChatRouter />
  </Switch>
);
