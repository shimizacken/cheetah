import {SavannahEvents} from './event.types';
import {authenticationHandler} from './members';
import {chatMessagesHandler, getAllChatMessages} from './messages';

export const eventHandler = (event: SavannahEvents) => {
  switch (event.type) {
    case 'handshake':
      return {
        type: 'handshake'
      };
    case 'authentication':
      return authenticationHandler(event);
    case 'chat-message':
      return chatMessagesHandler(event);
    case 'chat-messages':
      return getAllChatMessages(event);
  }

  return null;
};
