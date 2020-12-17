export const themeTypes = ['light', 'dark'] as const;

export type ThemeTypes = typeof themeTypes[number];

export type ChatMessage = {
  id: string;
  text: string;
  userRef: string;
  date: number;
  edited: boolean;
  deleted: boolean;
};

export type User = {
  id: string;
  userName: string;
  date: number;
  active: boolean;
};

interface Chat {
  [key: string]: ChatMessage;
}

interface Authentication {
  users: {
    [key: string]: User;
  };
  currentUserId: string;
}

export interface State {
  readonly chat: Chat;
  readonly authentication: Authentication;
  readonly themeType: ThemeTypes;
}
