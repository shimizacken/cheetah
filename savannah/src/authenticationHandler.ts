import {v4} from 'uuid';
import type {AuthenticationEvent} from '../../client/src/packages/socket/savannah.types';
import {log} from '../../client/src/packages/logger';

export const authenticationHandler = (): AuthenticationEvent => {
  log('authentication', 'authenticated');

  return {
    type: 'authentication',
    id: v4(),
    authenticated: true
  };
};
