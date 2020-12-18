import { Member, Members, MemberEvent, MembersEvent } from "./message.types";

const { v4 } = require("uuid");

const cheetahBot: Member = {
  id: v4(),
  userName: "Cheetah bot 🐆",
  date: Date.now(),
  active: true,
};

const members: Members = {
  [cheetahBot.id]: cheetahBot,
};

export const authenticationHandler = (member: MemberEvent): MembersEvent => {
  if (member.active) {
    members[member.id] = member;
  } else {
    delete members[member.id];
  }

  return {
    type: "members",
    members,
  };
};
