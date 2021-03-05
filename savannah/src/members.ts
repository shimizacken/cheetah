import {log} from '../../client/src/packages/logger';
import type {
  ChatMember,
  ChatMemberEvent,
  ChatMembers,
  ChatMembersEvent
} from '../../client/src/packages/socket/savannah.types';
const {v4} = require('uuid');

const cheetahBot: ChatMember = {
  id: v4(),
  userName: 'Cheetah bot 🐆',
  date: Date.now(),
  active: true
};

const members: ChatMembers = {
  [cheetahBot.id]: cheetahBot
};

export const chatMembersHandler = (
  member: ChatMemberEvent
): ChatMembersEvent => {
  log('chat-member', member);
  if (member.active) {
    members[member.id] = member;
    log('chat-member', `added - ${member.id}`);
  } else {
    log('chat-member', `remove - ${member}`);
    delete members[member.id];
  }

  const allMembers: ChatMembersEvent = {
    type: 'chat-members',
    members: members
  };

  return allMembers;
};
