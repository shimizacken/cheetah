import type {HandshakeEvent} from '../../client/src/packages/socket/savannah.types';
import {log} from '../../client/src/packages/logger';

export const handshakeHandler = (): HandshakeEvent => {
  log('handshake', '');

  return {
    type: 'handshake'
  };
};
