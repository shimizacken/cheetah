export const themeTypes = ['light', 'dark'] as const;

export type ThemeTypes = typeof themeTypes[number];

export type ChatMessage = {
  id: string;
  text: string;
  userRef: string;
  date: number;
  edited: boolean;
  deleted: boolean;
  linkPreview?: string;
};

export type User = {
  id: string;
  userName: string;
  date: number;
  active: boolean;
};

export type ChatMessages = {
  messages: {[key: string]: ChatMessage};
};

export interface Authentication {
  users: {
    [key: string]: User;
  };
  currentUserId: string;
}

export interface State {
  readonly chat: ChatMessages;
  readonly authentication: Authentication;
  readonly themeType: ThemeTypes;
}
