import {ChatMessages} from '../packages/socket/savannah.types';

export const themeTypes = ['light', 'dark'] as const;

export type ThemeTypes = typeof themeTypes[number];

export type User = {
  id: string;
  userName: string;
  date: number;
  active: boolean;
};

export interface Authentication {
  users: {
    [key: string]: User;
  };
  currentUserId: string;
  authenticated: boolean;
}

export interface State {
  readonly chat: {
    messages: ChatMessages;
  };
  readonly authentication: Authentication;
  readonly themeType: ThemeTypes;
}
