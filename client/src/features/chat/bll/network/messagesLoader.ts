import { createSocket } from '../../../../packages/socket';
import { store } from '../../../../state/store';
import { setMessages } from '../../state/chatMessagesActions';
const URL = 'ws://localhost:9500';
let currentSocket: WebSocket;
let _getSocket: () => WebSocket;

export const initChatWebSocket = () => {
  if (!currentSocket) {
    const { socket, getSocket } = createSocket(URL);
    currentSocket = socket;
    _getSocket = getSocket;
  }

  currentSocket.onmessage = (e) => {
    store.dispatch(setMessages(JSON.parse(e.data)));
  };
};

export const closeChatWebSocket = () => {
  currentSocket.close();
};

export const getWS = () => _getSocket();
