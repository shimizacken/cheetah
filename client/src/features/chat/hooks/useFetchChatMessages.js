import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initChatWebSocket } from '../bll/network/messagesLoader';

export const useFetchChatMessages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initChatWebSocket().onmessage = (e) => {
      //   dispatch(publishMessage(e.data));
    };
  }, [dispatch]);
};
