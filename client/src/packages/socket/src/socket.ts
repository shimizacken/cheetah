export type Socket = {
  socket: WebSocket;
  getSocket: () => WebSocket;
};

export const createSocket = (url: string, protocols?: string | string[]): Socket => {
  const socket = new WebSocket(url, protocols);

  socket.onerror = (error: Event) => {
    console.log(`WebSocket error: ${error}`);
  };

  socket.onclose = (e: CloseEvent) => {
    console.log('socket error', e);
  };

  const getSocket = () => socket;

  return { socket, getSocket };
};
