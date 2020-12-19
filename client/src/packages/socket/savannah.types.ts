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

export interface AuthenticationEvent extends EventCore {
  type: 'authentication';
  userName: string;
  date: number;
  active: boolean;
}

export interface HandshakeEvent extends EventCore {
  type: 'handshake';
  ref: string;
  userName?: string;
}

export interface ChatMemberEvent extends EventCore {
  type: 'chat-member';
  userName: string;
  date: number;
  active: boolean;
}

export interface ChatMembersEvent {
  type: 'chat-members';
  members: ChatMembers;
}

export interface ChatMessageEvent {
  type: 'chat-message';
  chatRef?: string;
  message: ChatMessage;
}

export interface ChatMessagesEvent {
  type: 'chat-messages';
  chatRef?: string;
  messages: ChatMessages;
}

export type SavannahEvents =
  | AuthenticationEvent
  | HandshakeEvent
  | ChatMemberEvent
  | ChatMembersEvent
  | ChatMessageEvent
  | ChatMessagesEvent;
