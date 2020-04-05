import { store } from '../../../../../state/store';
import { addUser } from '../../state/usersActions';

const URL = 'ws://localhost:9501';
let connection;

export const initChatUsers = () => {
  if (!connection) {
    connection = new WebSocket(URL);
  }

  connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
  };

  connection.onmessage = (e) => {
    console.log(e.data);
    store.dispatch(addUser(JSON.parse(e.data)));
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
