export const buildNewMessage = (id, text, userRef, date) => ({
  id,
  text,
  userRef,
  date,
  edited: false,
  deleted: false
});
