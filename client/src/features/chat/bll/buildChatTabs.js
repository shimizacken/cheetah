export const buildChatTabs = (usersLength) => [
  {
    id: 1,
    text: `Participants (${usersLength})`,
    url: '/participants',
    selected: false
  },
  {
    id: 2,
    text: 'Chat',
    url: '/chat',
    selected: true
  }
];
