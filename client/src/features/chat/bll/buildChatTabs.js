import { Routes } from '../../routings/routes';

export const buildChatTabs = (usersLength) => [
  {
    id: 1,
    text: `Participants (${usersLength})`,
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
