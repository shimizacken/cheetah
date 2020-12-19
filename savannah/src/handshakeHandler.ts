import {HandshakeEvent} from './event.types';

export const handshakeHandler = (): HandshakeEvent => ({
  type: 'handshake'
});
