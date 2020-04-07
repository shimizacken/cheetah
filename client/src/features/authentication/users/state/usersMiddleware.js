import { getWS } from '../bll/network/usersLoader';
import { POST_USER, SIGN_OUT } from './usersConstants';
import { selectUser } from './usersSelectors';

export const usersMiddleware = ({ getState }) => (next) => (action) => {
  if (action.type === POST_USER) {
    getWS().send(JSON.stringify(action.user));
  }

  if (action.type === SIGN_OUT) {
    const user = selectUser(action.userId)(getState());

    getWS().send(
      JSON.stringify({
        ...user,
        active: false
      })
    );
  }

  return next(action);
};
