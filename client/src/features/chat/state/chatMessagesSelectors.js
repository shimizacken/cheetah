export const selectMessages = (state) => state?.chat?.messages;

export const selectMessage = (messageId) => (state) => state?.chat?.messages[messageId];
