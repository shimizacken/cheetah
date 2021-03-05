import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectIsUserOnline} from '../users/state/usersSelectors';
import {Routes} from '../../routings/routes';
import {State} from '../../../state/store.types';

export const AuthenticationRouter: React.FC = () => {
  const isUserOnline = useSelector(selectIsUserOnline);
  const isAuthenticated = useSelector(
    (state: State) => state.authentication.authenticated
  );

  return (
    <Switch>
      <Route
        path={Routes.DEFAULT}
        children={() => {
          if (!isUserOnline && !isAuthenticated) {
            return <Redirect to={Routes.SIGN_IN} />;
          }

          return <Redirect to={Routes.CHAT} />;
        }}
      />
    </Switch>
  );
};
