let currentSocket: WebSocket;

export const createSocket = (
  url: string,
  protocols?: string | string[]
): WebSocket => {
  if (!currentSocket) {
    currentSocket = new WebSocket(url, protocols);
  }

  currentSocket.onerror = (error: Event) => {
    console.log(`WebSocket error: ${error}`);
  };

  currentSocket.onclose = (e: CloseEvent) => {
    console.log('socket error', e);
  };

  return currentSocket;
};

export const getSocket = () => {
  if (!currentSocket) {
    throw new Error('Socket closed');
  }
  return currentSocket;
};
