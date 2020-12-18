import type { ChatMember, ChatMembers } from "./chat.types";
import { AuthenticationEvent, ChatMembersEvent } from "./event.types";

const { v4 } = require("uuid");

const cheetahBot: ChatMember = {
  id: v4(),
  userName: "Cheetah bot 🐆",
  date: Date.now(),
  active: true,
};

const members: ChatMembers = {
  [cheetahBot.id]: cheetahBot,
};

export const authenticationHandler = (
  member: AuthenticationEvent
): ChatMembersEvent => {
  if (member.active) {
    members[member.id] = member;
  } else {
    delete members[member.id];
  }

  const allMembers: ChatMembersEvent = {
    type: "chat-members",
    members: members,
  };

  return allMembers;
};
