export interface Member {
  id: string;
  userName: string;
  date: number;
  active: boolean;
}

export type Members = {
  [key: string]: Member;
};

export const eventType = [
  'authentication',
  'chat-message',
  'handshake',
  'member',
  'members'
] as const;

export type EventType = typeof eventType[number];

export interface EventCore {
  type: EventType;
}

export interface HandshakeEvent extends EventCore {
  userName?: string;
}

export interface MemberEvent extends EventCore {
  id: string;
  date: number;
  userName: string;
  active: boolean;
}

export interface MembersEvent extends EventCore {
  members: Members;
}

export type SavannahEvents = HandshakeEvent | MemberEvent | MembersEvent;
