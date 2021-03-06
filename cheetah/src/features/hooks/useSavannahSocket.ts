import {useEffect} from 'react';
import {createSocket} from '../../packages/socket';
import {SavannahEvents} from '../../packages/socket/savannah.types';
import {store} from '../../state';
import {addUser} from '../authentication';
import {
  setUserAuthenticated,
  updateMembers
} from '../authentication/users/state/usersActions';
import {setMessages} from '../chat/state/chatMessagesActions';

export const useSavannahSocket = () => {
  useEffect(() => {
    const socket = createSocket('ws://localhost:9555');

    socket.onopen = (e: Event) => {
      socket.send(
        JSON.stringify({
          type: 'handshake'
        })
      );
    };

    socket.onerror = (e: Event) => {
      console.log('🚀 ~ error', e);
      // dispatch error event
    };

    socket.onclose = (e: CloseEvent) => {
      console.log('🚀 ~ close', e);
      // dispatch close event
    };

    socket.onmessage = (e: MessageEvent) => {
      const savannahEvents: SavannahEvents = JSON.parse(e.data);

      // dispatch message event
      switch (savannahEvents.type) {
        case 'authentication':
          store.dispatch(setUserAuthenticated(savannahEvents));
          break;
        case 'chat-members':
          store.dispatch(updateMembers(savannahEvents.members));
          break;
        case 'chat-member':
          store.dispatch(addUser(savannahEvents));
          break;
        case 'chat-messages':
          store.dispatch(setMessages(savannahEvents.messages));
          break;
      }
    };

    // return socket.close;
  }, []);
};
