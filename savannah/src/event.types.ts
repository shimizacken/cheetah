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

export interface ChatMessageEvent extends EventCore {
  type: 'chat-message';
  message: ChatMessage;
}

export interface ChatMessagesEvent extends EventCore {
  type: 'chat-message';
  message: ChatMessages;
}

export type SavannahEvents =
  | AuthenticationEvent
  | HandshakeEvent
  | ChatMemberEvent
  | ChatMembersEvent
  | ChatMessageEvent;
