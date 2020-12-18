const WebSocket = require("ws");
const { v4 } = require("uuid");

const clients = [];

const server = new WebSocket.Server({ port: 9501 });

const cheetahBot = {
  id: v4(),
  userName: "Cheetah bot 🐆",
  date: Date.now(),
  active: true,
};

const chatUsers = {
  [cheetahBot.id]: cheetahBot,
};

server.on("request", (request) => {
  console.log("request", request);
});

server.on("connection", (ws) => {
  console.log("Users WebSocket is open");

  const clientIndex = clients.push(ws) - 1;

  ws.on("message", (message) => {
    if (message) {
      const incomingUser = JSON.parse(message);

      if (incomingUser) {
        chatUsers[incomingUser.id] = incomingUser;
        const json = JSON.stringify(chatUsers);

        for (let i = 0; i < clients.length; i++) {
          clients[i].send(json);
        }
      }
    }
  });

  ws.on("close", function (connection) {
    // close connections
    // console.log('close', connection);
    clients.splice(clientIndex, 1);
  });

  ws.send(JSON.stringify(chatUsers));
});

module.exports = server;
