import { ChatMessage } from '../../../state/store.types';

export const buildNewMessage = (
  id: string,
  text: string,
  userRef: string,
  date: number
): ChatMessage => ({
  id,
  text,
  userRef,
  date,
  edited: false,
  deleted: false
});
