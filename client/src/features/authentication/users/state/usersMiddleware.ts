import {Dispatch} from 'react';
import type {MiddlewareAPI, AnyAction, Middleware} from 'redux';
import {getSocket} from '../../../../packages/socket/src/socket';
import {POST_USER, SIGN_OUT} from './usersConstants';
import {selectUser} from './usersSelectors';

export const usersMiddleware: Middleware = ({getState}: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  if (action.type === POST_USER) {
    const socket = getSocket();

    socket.send(
      JSON.stringify({
        type: 'authentication',
        ...action.user
      })
    );
  }

  if (action.type === SIGN_OUT) {
    const socket = getSocket();
    const user = selectUser(action.userId)(getState());

    socket.send(
      JSON.stringify({
        type: 'authentication',
        ...user,
        active: false
      })
    );
  }

  return next(action);
};
