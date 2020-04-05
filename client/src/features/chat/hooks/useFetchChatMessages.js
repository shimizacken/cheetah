import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initChatWebSocket } from '../bll/network/ws';

export const useFetchChatMessages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initChatWebSocket().onmessage = (e) => {
      console.log('Message in hook' + e.data);
    };
  });
};
