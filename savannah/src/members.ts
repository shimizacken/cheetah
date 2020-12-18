import type { ChatMember, ChatMembers } from "./chat.types";
import { AuthenticationEvent, ChatMembersEvent } from "./event.types";
import { log } from "./logger";
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
    log("chat-member", `added - ${member.id}`);
  } else {
    delete members[member.id];
    log("chat-member", `remove - ${member.id}`);
  }

  const allMembers: ChatMembersEvent = {
    type: "chat-members",
    members: members,
  };

  return allMembers;
};
