import {Server} from 'ws';

const socket = new Server({port: 9555});

socket.on('connection', (ws) => {
  console.log('🚀 ~ file: events.ts', ws);
});
