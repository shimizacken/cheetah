import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectShouldDisplayChat } from '../users/state/usersSelectors';

export const AuthenticationRouter = () => {
  const isUserOnline = useSelector(selectShouldDisplayChat);

  return (
    <Switch>
      <Route
        path="/"
        children={() => {
          if (!isUserOnline) {
            return <Redirect to="/sign-in" />;
          }

          return <Redirect to="/chat" />;
        }}
      />
    </Switch>
  );
};
