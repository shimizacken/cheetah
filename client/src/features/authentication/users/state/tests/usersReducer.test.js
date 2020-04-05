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
        displayName: 'jimi zax',
        active: false
      };

      expect(users(state, addUser(user))).toMatchSnapshot();
    });

    it('should add another user', () => {
      const state = {
        '1': {
          id: '1',
          displayName: 'jimi',
          active: false
        }
      };
      const user = {
        id: '2',
        displayName: 'leah',
        active: false
      };

      expect(users(state, addUser(user))).toMatchSnapshot();
    });
  });

  describe.only('set user active test suite', () => {
    it('should activate user', () => {
      const userId = '1';
      const state = {
        [userId]: {
          id: '1',
          displayName: 'jimi',
          active: false
        },
        '2': {
          id: '2',
          displayName: 'leah',
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
          displayName: 'jimi',
          active: true
        },
        '2': {
          id: '2',
          displayName: 'leah',
          active: false
        }
      };

      expect(users(state, setUserActive(userId))).toMatchSnapshot();
    });
  });
});
