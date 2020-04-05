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
  };

  return () => connection;
};

export const closeChatWebSocket = () => {
  connection.close();
};

export const postMessage = (message) => {
  connection.onopen = () => {
    connection.send(message);
  };
};
