import {HandshakeEvent} from './event.types';
import {log} from '../../client/src/packages/logger';

export const handshakeHandler = (): HandshakeEvent => {
  log('handshake', '');

  return {
    type: 'handshake'
  };
};
