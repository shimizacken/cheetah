import { store } from '../../../../state/store';
import { setMessages } from '../../state/chatMessagesActions';
const URL = 'ws://localhost:9500';
let connection;

export const initChatWebSocket = () => {
  if (!connection) {
    connection = new WebSocket(URL);
  }

  connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
  };

  connection.onmessage = (e) => {
    store.dispatch(setMessages(JSON.parse(e.data)));
  };

  return () => connection;
};

export const closeChatWebSocket = () => {
  connection.close();
};

export const getWS = () => connection;
