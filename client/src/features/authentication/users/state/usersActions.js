import { ADD_USER, REMOVE_USER, SET_USER_ACTIVE, SET_CURRENT_USER_ID, POST_USER } from './usersConstants';

export const postUser = (user) => ({
  type: POST_USER,
  user
});

export const addUser = (user) => ({
  type: ADD_USER,
  user
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId
});

export const setUserActive = (userId) => ({
  type: SET_USER_ACTIVE,
  userId
});

export const setCurrentUserId = (currentUserId) => ({
  type: SET_CURRENT_USER_ID,
  currentUserId
});
