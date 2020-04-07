import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserOnline } from '../users/state/usersSelectors';

export const AuthenticationRouter = () => {
  const isUserOnline = useSelector(selectIsUserOnline);

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
