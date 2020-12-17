import type { State } from '../../../state/store.types';

export const selectMessages = (state: State) => state?.chat?.messages;

export const selectMessage = (messageId: string) => (state: State) =>
  selectMessages(state)?.[messageId];
