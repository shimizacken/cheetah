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
    console.log(e.data);
    // store.dispatch(publishMessage(JSON.parse(e.data)));
    store.dispatch(setMessages(JSON.parse(e.data)));
  };

  return () => connection;
};

export const closeChatWebSocket = () => {
  connection.close();
};

export const postMessage = (message) => {
  //   connection.onopen = () => {
  //     console.log('send: ' + message);
  //     connection.send(message);
  //   };
};

export const getWS = () => connection;
