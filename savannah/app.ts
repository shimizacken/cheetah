import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import {v4} from 'uuid';

import {eventHandler} from './src/eventHandler';
import {log} from '../client/src/packages/logger/src/logger';
import type {SavannahEvents} from '../client/src/packages/socket/savannah.types';

const app = express();

//initialize a simple http server
const server = http.createServer(app);

interface Sockets {
  [key: string]: WebSocket;
}

//initialize the WebSocket server instance
const socket = new WebSocket.Server({server});
const sockets: Sockets = {};

socket.on('connection', (ws: WebSocket) => {
  const socketRef = v4();
  sockets[socketRef] = ws;

  log('socket', `${socketRef}, ${Object.values(sockets).length}`);

  ws.on('message', (message: string) => {
    const incomingMessage: SavannahEvents = JSON.parse(message);
    const resultMessage = eventHandler(incomingMessage);

    if (resultMessage) {
      const socketArray = Object.values(sockets);

      for (let i = 0; i < socketArray.length; i++) {
        socketArray[i].send(JSON.stringify(resultMessage));
      }
    }
  });

  ws.on('close', () => {
    delete sockets[socketRef];
    log('socket', socketRef);
    log('socket', Object.values(sockets).length);
  });
});

//start our server
server.listen(process.env.PORT || 9555, () => {
  console.log(`Server started on port ${process.env.PORT || 9555}`);
});
