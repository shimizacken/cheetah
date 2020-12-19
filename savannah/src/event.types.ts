import type {ChatMessages, Guid, ChatMembers, ChatMessage} from './chat.types';

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
