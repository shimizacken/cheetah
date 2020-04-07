const { urlify, preview } = require('./linkPreview');

const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

const clients = [];

const wss = new WebSocket.Server({ port: 9500 });

const welcomeMessage = {
  id: uuidv4(),
  text: '🤖 Welcome to the chat!',
  userRef: '99f9eac4-0de4-4733-868f-b18610adc6b0',
  date: Date.now(),
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
        let json;

        if (incomingMessage) {

            const url = urlify(incomingMessage.text);

            if (url) {
                
                preview(url).then(function(res) {
                    console.log(res);
                    
                    incomingMessage['linkPreview'] = {
                        title: res.title,
                        image: res.image,
                        description: res.description,
                        link: res.link
                    };
                    
                    chatMessages[incomingMessage.id] = incomingMessage;

                    json = JSON.stringify(chatMessages);

                    for (let i = 0; i < clients.length; i++) {
                        clients[i].send(json);
                    }
                });
            }
            else {

                chatMessages[incomingMessage.id] = incomingMessage;
                json = JSON.stringify(chatMessages);

                for (let i = 0; i < clients.length; i++) {
                    clients[i].send(json);
                }
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
