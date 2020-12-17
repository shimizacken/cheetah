import { createSelector } from 'reselect';
import { State, User } from '../../../../state/store.types';

export const selectUsers = (state: State) => state?.authentication?.users;

export const selectCurrentUserId = (state: State) =>
  state?.authentication?.currentUserId;

export const selectUser = (userId: string) =>
  createSelector(selectUsers, (users) => users?.[userId]);

export const selectIsUserOnline = createSelector(
  selectUsers,
  selectCurrentUserId,
  (users: { [key: string]: User }, currentUserId: string) =>
    !!users?.[currentUserId]
);

export const selectIsCurrentUser = (userId: string) =>
  createSelector(
    selectCurrentUserId,
    (currentUserId) => userId === currentUserId
  );
