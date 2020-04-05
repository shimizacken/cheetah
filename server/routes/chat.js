const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
 
const clients = [];

const wss = new WebSocket.Server({ port: 9500 });

const welcomeMessage = {
  id: uuidv4(),
  text: '🤖 Welcome to the chat!',
  userRef: '3',
  date: 789,
  edited: false,
  deleted: false
};

const chatMessages = {
  [welcomeMessage.id]: welcomeMessage
};

wss.on('connection', ws => {
  clients.push(ws);

  ws.on('message', message => {
    
    if (message) {

        const incomingMessage = JSON.parse(message);
        console.log('clients', clients.length);
        if (incomingMessage) {
            chatMessages[incomingMessage.id] = incomingMessage;
            const json = JSON.stringify(chatMessages);

            for (let i = 0; i < clients.length; i++) {
                clients[i].send(json);
            }
        }
    }
    
  });
  
  ws.send(JSON.stringify(chatMessages));
});

wss.on('close', function(connection) {
    // close connections
});

module.exports = wss;
