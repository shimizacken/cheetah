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
