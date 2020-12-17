import { Routes } from '../../routings/routes';

export const buildChatTabs = (usersCount: number) => [
  {
    id: 1,
    text: `Participants (${usersCount})`,
    url: Routes.PARTICIPANTS,
    selected: false
  },
  {
    id: 2,
    text: 'Chat',
    url: Routes.CHAT,
    selected: true
  }
];
