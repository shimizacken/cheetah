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
    console.log("🚀 ~ member - added", member);
  } else {
    delete members[member.id];
    console.log("🚀 ~ member - remove", member);
  }

  const allMembers: ChatMembersEvent = {
    type: "chat-members",
    members: members,
  };

  return allMembers;
};
