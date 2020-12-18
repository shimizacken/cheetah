import {useEffect} from 'react';
import {createSocket} from '../../packages/socket';
import {SavannahEvents} from '../../packages/socket/savannah.types';
import {store} from '../../state';
import {addUser} from '../authentication';
import {updateMembers} from '../authentication/users/state/usersActions';

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
      console.log(e.data);
      const savannahEvents: SavannahEvents = JSON.parse(e.data);

      // dispatch message event
      switch (savannahEvents.type) {
        case 'chat-members':
          store.dispatch(updateMembers(savannahEvents.members));
          break;
        case 'chat-member':
          store.dispatch(addUser(savannahEvents));
          break;
      }
    };

    // return socket.close;
  }, []);
};
