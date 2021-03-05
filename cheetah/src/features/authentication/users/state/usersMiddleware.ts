import {Dispatch} from 'react';
import type {MiddlewareAPI, AnyAction, Middleware} from 'redux';
import {ChatMemberEvent} from '../../../../packages/socket/savannah.types';
import {getSocket} from '../../../../packages/socket/src/socket';
import {POST_USER, SIGN_OUT} from './usersConstants';
import {selectUser} from './usersSelectors';

export const usersMiddleware: Middleware = ({getState}: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  if (action.type === POST_USER) {
    const socket = getSocket();

    socket?.send(
      JSON.stringify({
        type: 'authentication'
      })
    );
  }

  if (action.type === SIGN_OUT) {
    const socket = getSocket();
    const user = selectUser(action.userId)(getState());

    const memberEvent: ChatMemberEvent = {
      type: 'chat-member',
      ...user,
      active: false
    };

    socket?.send(JSON.stringify(memberEvent));
  }

  return next(action);
};
