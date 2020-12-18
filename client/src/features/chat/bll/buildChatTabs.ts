import {Routes} from '../../routings/routes';
import {Tab} from './clickChatTab';

export const buildChatTabs = (usersCount: number): Tab[] => [
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
