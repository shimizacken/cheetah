import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserOnline } from '../users/state/usersSelectors';
import { Routes } from '../../routings/routes';

export const AuthenticationRouter = () => {
  const isUserOnline = useSelector(selectIsUserOnline);

  return (
    <Switch>
      <Route
        path="/"
        children={() => {
          if (!isUserOnline) {
            return <Redirect to={Routes.SIGN_IN} />;
          }

          return <Redirect to={Routes.CHAT} />;
        }}
      />
    </Switch>
  );
};
