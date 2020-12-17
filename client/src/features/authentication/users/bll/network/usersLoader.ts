import { createSocket } from '../../../../../packages/socket';
import { store } from '../../../../../state/store';
import { addUser } from '../../state/usersActions';

const URL = 'ws://localhost:9501';
let currentSocket: WebSocket;
let _getSocket: () => WebSocket;

export const initChatUsers = () => {
  if (!currentSocket) {
    const { socket, getSocket } = createSocket(URL);
    currentSocket = socket;
    _getSocket = getSocket;
  }

  currentSocket.onmessage = (e: MessageEvent) => {
    store.dispatch(addUser(JSON.parse(e.data)));
  };
};

export const closeChatWebSocket = () => {
  currentSocket.close();
};

export const getWS = () => _getSocket();
