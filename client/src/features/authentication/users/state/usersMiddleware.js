import { getWS } from '../bll/network/usersLoader';
import { POST_USER } from './usersConstants';

export const usersMiddleware = () => (next) => (action) => {
  if (action.type === POST_USER) {
    getWS().send(JSON.stringify(action.user));
  }

  return next(action);
};
