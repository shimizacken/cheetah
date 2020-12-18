export const messageType = [
  "handshake",
  "chat",
  "member",
  "authentication",
] as const;

export type MessageType = typeof messageType[number];

export interface MessageCore {
  type: MessageType;
}

export interface Handshake extends MessageCore {
  userName?: string;
}
