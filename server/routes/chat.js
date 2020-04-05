const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 9500 });
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(message);
    ws.send(message);
  });
  
  ws.send('Welcome to the chat!')
});

module.exports = wss;
