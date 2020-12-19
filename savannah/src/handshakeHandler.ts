import {HandshakeEvent} from './event.types';
import {log} from './logger';

export const handshakeHandler = (): HandshakeEvent => {
  log('handshake');

  return {
    type: 'handshake'
  };
};
