import { randomAction } from '../../../../state/randomAction';
import { messages } from '../chatMessagesReducer';
import { publishMessage, editMessage, deleteMessage } from '../chatMessagesActions';

describe('chatMessagesReducer test suite', () => {
  describe('defaults', () => {
    it('should return default state', () => {
      const action = randomAction();

      expect(messages(undefined, action)).toMatchSnapshot();
    });
  });

  describe('publish message test suite', () => {
    it('should add single message', () => {
      const message = {
        id: '1a2s3d4f5g',
        text: 'hello all!',
        userRef: '1',
        date: 1586083281242,
        edited: false,
        deleted: false
      };

      expect(messages(undefined, publishMessage(message))).toMatchSnapshot();
    });

    it('should add multiple messages', () => {
      const state = {
        '1a2s3d4f5g': {
          id: '1a2s3d4f5g',
          text: 'hello all!',
          userRef: '1',
          date: 123,
          edited: false,
          deleted: false
        },
        '4q5w6e64r': {
          id: '4q5w6e64r',
          text: 'Hi!',
          userRef: '2',
          date: 456,
          edited: false,
          deleted: false
        }
      };

      const message = {
        id: '1z32c15c64d',
        text: 'Hi there!',
        userRef: '3',
        date: 789,
        edited: false,
        deleted: false
      };

      expect(messages(state, publishMessage(message))).toMatchSnapshot();
    });
  });

  describe('edit message test suite', () => {
    it('should update existing message', () => {
      const messageId = '9i8u7y6t';
      const state = {
        '1a2s3d4f5g': {
          id: '1a2s3d4f5g',
          text: 'hello all!',
          userRef: '1',
          date: 123,
          edited: false,
          deleted: false
        },
        [messageId]: {
          id: '4q5w6e64r',
          text: 'Hi!',
          userRef: '2',
          date: 456,
          edited: false,
          deleted: false
        }
      };

      const message = {
        id: messageId,
        text: 'Hi to all, I edited this message!',
        userRef: '2',
        date: 987,
        edited: true,
        deleted: false
      };

      expect(messages(state, editMessage(message))).toMatchSnapshot();
    });
  });

  describe('delete message test suite', () => {
    it('should delete message by id', () => {
      const messageId = '1a2b3c4d';
      const state = {
        '1a2s3d4f5g': {
          id: '1a2s3d4f5g',
          text: 'hello all!',
          userRef: '1',
          date: 123,
          edited: false,
          deleted: false
        },
        [messageId]: {
          id: messageId,
          text: 'Hi!',
          userRef: '2',
          date: 456,
          edited: false,
          deleted: false
        }
      };

      expect(messages(state, deleteMessage(messageId))).toMatchSnapshot();
    });
  });
});
