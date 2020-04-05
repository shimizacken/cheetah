import { randomAction } from '../../../../state/randomAction';
import { messages } from '../chatMessagesReducer';
import { publishMessage } from './chatMessagesActions';

describe('chatMessagesReducer test suite', () => {
  describe('defaults', () => {
    it('should return default state', () => {
      const action = randomAction();

      expect(messages(undefined, action)).toMatchSnapshot();
    });
  });

  describe('publish message test suite', () => {
    it('should add new message', () => {
        const message = {
          id: '1a2s3d4f5g',
          text: 'hello all!'
        };

        expect(messages(undefined, publishMessage(message))).toMatchSnapshot();
    });
  });

  describe('edit message test suite', () => {
    it.todo('should add new message');
  });

  describe('delete message test suite', () => {
    it.todo('should add new message');
  });
});