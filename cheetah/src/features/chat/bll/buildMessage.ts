import {ChatMessage} from '../../../packages/socket/savannah.types';

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
