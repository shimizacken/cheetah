import { randomAction } from '../../../../../state/randomAction';
import { users } from '../usersReducer';
import { addUser, setUserActive } from '../usersActions';

describe('usersReducer test suite', () => {
  describe('defaults', () => {
    it('should return default state', () => {
      const action = randomAction();

      expect(users(undefined, action)).toMatchSnapshot();
    });
  });

  describe('add user test suite', () => {
    it('should add first user', () => {
      const state = {};
      const user = {
        id: '1',
        userName: 'jimi zax',
        active: false
      };

      expect(users(state, addUser(user))).toMatchSnapshot();
    });

    it('should add another user', () => {
      const state = {
        '1': {
          id: '1',
          userName: 'jimi',
          active: false
        }
      };
      const user = {
        id: '2',
        userName: 'leah',
        active: false
      };

      expect(users(state, addUser(user))).toMatchSnapshot();
    });
  });

  describe('set user active test suite', () => {
    it('should activate user', () => {
      const userId = '1';
      const state = {
        [userId]: {
          id: '1',
          userName: 'jimi',
          active: false
        },
        '2': {
          id: '2',
          userName: 'leah',
          active: false
        }
      };

      expect(users(state, setUserActive(userId))).toMatchSnapshot();
    });

    it('should deactivate user', () => {
      const userId = '1';
      const state = {
        [userId]: {
          id: '1',
          userName: 'jimi',
          active: true
        },
        '2': {
          id: '2',
          userName: 'leah',
          active: false
        }
      };

      expect(users(state, setUserActive(userId))).toMatchSnapshot();
    });
  });
});
