import type {SavannahEvents} from '../../client/src/packages/socket/savannah.types';
import {authenticationHandler} from './authenticationHandler';
import {handshakeHandler} from './handshakeHandler';
import {chatMembersHandler} from './members';
import {chatMessagesHandler, getAllChatMessages} from './messages';

export const eventHandler = (event: SavannahEvents) => {
  switch (event.type) {
    case 'handshake':
      return handshakeHandler();
    case 'authentication':
      return authenticationHandler(event);
    case 'chat-member':
      return chatMembersHandler(event);
    case 'chat-message':
      return chatMessagesHandler(event);
    case 'chat-messages':
      return getAllChatMessages(event);
  }

  return null;
};
