import {Members} from '../../../../packages/socket/savannah.types';
import {User} from '../../../../state/store.types';
import {
  ADD_USER,
  REMOVE_USER,
  SET_USER_ACTIVE,
  SET_CURRENT_USER_ID,
  POST_USER,
  SIGN_OUT
} from './usersConstants';

export const postUser = (user: User) => ({
  type: POST_USER,
  user
});

export const addUser = (user: User) => ({
  type: ADD_USER,
  user
});

export const updateMembers = (members: Members) => ({
  type: 'UPDATE_MEMBERS',
  members
});

export const removeUser = (userId: string) => ({
  type: REMOVE_USER,
  userId
});

export const setUserActive = (userId: string) => ({
  type: SET_USER_ACTIVE,
  userId
});

export const setCurrentUserId = (currentUserId: string) => ({
  type: SET_CURRENT_USER_ID,
  currentUserId
});

export const signOut = (userId: string) => ({
  type: SIGN_OUT,
  userId
});
