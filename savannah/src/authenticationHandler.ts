import {AuthenticationEvent} from './event.types';
import {log} from '../../client/src/packages/logger';
const {v4} = require('uuid');

export const authenticationHandler = (): AuthenticationEvent => {
  log('authentication', 'authenticated');

  return {
    type: 'authentication',
    id: v4(),
    authenticated: true
  };
};
