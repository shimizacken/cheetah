import {useEffect} from 'react';
import {createSocket} from '../../packages/socket';

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
      // dispatch message event
    };

    // return socket.close;
  }, []);
};
