import { createSelector } from 'reselect';

export const selectUsers = (state) => state?.authentication?.users;

export const selectCurrentUserId = (state) => state?.authentication?.currentUserId;

export const selectShouldDisplayChat = createSelector(
  selectUsers,
  selectCurrentUserId,
  (users, currentUserId) => users?.[currentUserId] !== undefined
);
