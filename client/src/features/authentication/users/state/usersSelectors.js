import { createSelector } from 'reselect';

export const selectUsers = (state) => state?.authentication?.users;

export const selectCurrentUserId = (state) => state?.authentication?.currentUserId;

export const selectUser = (userId) => createSelector(selectUsers, (users) => users?.[userId]);

export const selectIsUserOnline = createSelector(
  selectUsers,
  selectCurrentUserId,
  (users, currentUserId) => users?.[currentUserId] !== undefined
);

export const selectIsCurrentUser = (userId) =>
  createSelector(selectCurrentUserId, (currentUserId) => {
    return userId === currentUserId;
  });
