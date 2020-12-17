const currentSocket = {
  socket: undefined,
};

export const createSocket = (
  url: string,
  protocols?: string | string[]
): WebSocket => {
  if (currentSocket.socket) {
    throw new Error("WebSocket already exist");
  }

  currentSocket.socket = new WebSocket(url, protocols);

  return currentSocket.socket;
};
