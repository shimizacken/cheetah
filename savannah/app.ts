import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import { authenticationHandler } from "./src/members";
import { MemberEvent, SavannahEvents } from "./src/message.types";

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const socket = new WebSocket.Server({ server });

socket.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: string) => {
    const incomingMessage: SavannahEvents = JSON.parse(message);
    let resultMessage;

    switch (incomingMessage.type) {
      case "handshake":
        break;
      case "authentication":
        resultMessage = authenticationHandler(incomingMessage as MemberEvent);
        break;
      case "chat-message":
        break;
    }

    if (resultMessage) {
      ws.send(JSON.stringify(resultMessage));
      console.log(
        "🚀 ~ file: app.ts ~ line 39 ~ ws.on ~ resultMessage",
        resultMessage
      );
    }
  });

  //send immediately a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

//start our server
server.listen(process.env.PORT || 9555, () => {
  console.log(`Server started on port ${server.address()} :)`);
});
