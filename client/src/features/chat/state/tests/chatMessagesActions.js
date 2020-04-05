import { PUBLISH_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "./chatMessagesConstants";

export const publishMessage = (message) => ({
  type: PUBLISH_MESSAGE,
  message
});

export const editMessage = (message) => ({
  type: EDIT_MESSAGE,
  message
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  messageId
});
