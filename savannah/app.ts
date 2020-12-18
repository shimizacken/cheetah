import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import { SavannahEvents } from "./src/event.types";
import { eventHandler } from "./src/eventHanlder";
const { v4 } = require("uuid");

const app = express();

//initialize a simple http server
const server = http.createServer(app);

interface Sockets {
  [key: string]: WebSocket;
}

//initialize the WebSocket server instance
const socket = new WebSocket.Server({ server });
const sockets: Sockets = {};

socket.on("connection", (ws: WebSocket) => {
  const socketRef = v4();
  sockets[socketRef] = ws;

  console.log("🚀 ~ socket added", socketRef, Object.values(sockets).length);

  ws.on("message", (message: string) => {
    const incomingMessage: SavannahEvents = JSON.parse(message);
    const resultMessage = eventHandler(incomingMessage);

    if (resultMessage) {
      const socketArray = Object.values(sockets);

      for (let i = 0; i < socketArray.length; i++) {
        socketArray[i].send(JSON.stringify(resultMessage));
      }
    }
  });

  ws.on("close", () => {
    delete sockets[socketRef];
    console.log("🚀 ~ socket closed", socketRef);
    console.log("🚀 ~ sockets", Object.values(sockets).length);
  });
});

//start our server
server.listen(process.env.PORT || 9555, () => {
  console.log(`Server started on port ${process.env.PORT || 9555}`);
});
