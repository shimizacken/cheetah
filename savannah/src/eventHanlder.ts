import { SavannahEvents } from "./event.types";
import { authenticationHandler } from "./members";
import { chatMessagesHandler } from "./messages";

export const eventHandler = (event: SavannahEvents) => {
  switch (event.type) {
    case "authentication":
      return authenticationHandler(event);
    case "chat-message":
      return chatMessagesHandler(event);
  }

  return null;
};
