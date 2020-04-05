export const selectUsers = (state) => state?.users;

export const selectCurrentUserId = (state) => selectUsers(state)?.currentUserId;
