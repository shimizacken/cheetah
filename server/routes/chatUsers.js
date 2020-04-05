const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
 
const clients = [];

const wss = new WebSocket.Server({ port: 9501 });

const cheetahBot = {
  id: '99f9eac4-0de4-4733-868f-b18610adc6b0',
  displayName: 'Cheetah bot 🐆',
  date: Date.now,
  active: true
};

const chatUsers = {
  [cheetahBot.id]: cheetahBot
};


wss.on('connection', ws => {
  clients.push(ws);

  ws.on('message', message => {
    
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
  
  ws.send(JSON.stringify(chatUsers));
});

wss.on('close', function(connection) {
    // close connections
});

module.exports = wss;
