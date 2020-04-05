import { messages } from '../chatMessagesReducer';

describe('chatMessagesReducer test suite', () => {
    it('should return default state', () => {
        expect(messages()).toMatchSnapshot();
    });
});