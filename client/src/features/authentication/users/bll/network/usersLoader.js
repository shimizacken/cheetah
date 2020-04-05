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
    console.log(JSON.parse(e.data));
    store.dispatch(addUser(JSON.parse(e.data)));
  };

  return () => connection;
};

export const closeChatWebSocket = () => {
  connection.close();
};

export const getWS = () => connection;
