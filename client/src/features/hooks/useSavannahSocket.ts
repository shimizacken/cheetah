import {useEffect} from 'react';
import {createSocket} from '../../packages/socket';
import {
  SavannahEvents,
  MembersEvent
} from '../../packages/socket/savannah.types';
import {store} from '../../state';
import {addUser} from '../authentication';
import {updateMembers} from '../authentication/users/state/usersActions';

export const useSavannahSocket = () => {
  useEffect(() => {
    const socket = createSocket('ws://localhost:9555');

    socket.onopen = (e: Event) => {
      console.log('🚀 ~ file: RootComponent.tsx ~ line 25 ~ useEffect ~ e', e);

      socket.send(
        JSON.stringify({
          type: 'handshake'
        })
      );
    };

    socket.onerror = (e: Event) => {
      console.log('🚀 ~ file: RootComponent.tsx ~ line 29 ~ useEffect ~ e', e);
      // dispatch error event
    };

    socket.onclose = (e: CloseEvent) => {
      console.log('🚀 ~ file: RootComponent.tsx ~ line 29 ~ useEffect ~ e', e);
      // dispatch close event
    };

    socket.onmessage = (e: MessageEvent) => {
      console.log(e.data);
      const savannahEvents: SavannahEvents = JSON.parse(e.data);

      // dispatch message event
      switch (savannahEvents.type) {
        case 'members':
          const d = savannahEvents as MembersEvent;
          store.dispatch(updateMembers(d.members));
          break;
      }
    };

    // return socket.close;
  }, []);
};
