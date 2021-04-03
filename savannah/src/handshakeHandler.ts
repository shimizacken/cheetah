import type {HandshakeEvent} from '../../cheetah/src/packages/socket/savannah.types';
import {log} from '../../cheetah/src/packages/logger';

export const handshakeHandler = (): HandshakeEvent => {
  log('handshake', '');

  return {
    type: 'handshake'
  };
};
