import { chatMessagesMiddleware } from '../features/chat';
import { usersMiddleware } from '../features/authentication';

export const middlewares = [chatMessagesMiddleware, usersMiddleware];
