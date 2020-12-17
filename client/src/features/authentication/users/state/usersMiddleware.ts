import { Dispatch } from 'react';
import type { MiddlewareAPI, AnyAction, Middleware } from 'redux';
import { getWS } from '../bll/network/usersLoader';
import { POST_USER, SIGN_OUT } from './usersConstants';
import { selectUser } from './usersSelectors';

export const usersMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  if (action.type === POST_USER) {
    getWS().send(JSON.stringify(action.user));
  }

  if (action.type === SIGN_OUT) {
    const user = selectUser(action.userId)(getState());

    getWS().send(
      JSON.stringify({
        ...user,
        active: false
      })
    );
  }

  return next(action);
};
