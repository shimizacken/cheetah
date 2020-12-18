import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const socket = new WebSocket.Server({ server });

socket.on("connection", (ws: WebSocket) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message: string) => {
    const incomingMessage = JSON.parse(message);

    //log the received message and send it back to the client
    console.log("received: %s", incomingMessage.type);

    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediately a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

//start our server
server.listen(process.env.PORT || 9555, () => {
  console.log(`Server started on port ${server.address()} :)`);
});
