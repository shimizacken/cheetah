export interface ChatMember {
  id: string;
  userName: string;
  date: number;
  active: boolean;
}

export type ChatMembers = {
  [key: string]: ChatMember;
};

export type Guid = string;

export type LinkPreview = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export interface ChatMessage {
  id: string;
  text: string;
  userRef: string;
  date: number;
  edited: boolean;
  deleted: boolean;
  linkPreview?: LinkPreview;
}

export type ChatMessages = {
  [key: string]: ChatMessage;
};

export interface ChatRoom {
  id: Guid;
  name: string;
  public: boolean;
  maxMembers: number;
  createDate: number;
}

export const eventType = [
  'authentication',
  'chat-message',
  'chat-messages',
  'handshake',
  'chat-member',
  'chat-members',
  'socket',
  'member-typing'
] as const;

export type EventType = typeof eventType[number];

export interface EventCore {
  id: Guid;
}

export interface AuthenticationEvent {
  type: 'authentication';
  id: string;
  authenticated?: boolean;
}

export interface HandshakeEvent {
  type: 'handshake';
}

export interface ChatMemberEvent {
  type: 'chat-member';
  id: Guid;
  userName: string;
  date: number;
  active: boolean;
}

export interface ChatMembersEvent {
  type: 'chat-members';
  members: ChatMembers;
}

export interface ChatMessageEvent extends EventCore {
  type: 'chat-message';
  chatRef?: string;
  message: ChatMessage;
}

export interface ChatMessagesEvent {
  type: 'chat-messages';
  chatRef?: string;
  messages?: ChatMessages;
}

export type SavannahEvents =
  | AuthenticationEvent
  | HandshakeEvent
  | ChatMemberEvent
  | ChatMembersEvent
  | ChatMessageEvent
  | ChatMessagesEvent;
