import { chatMessagesMiddleware } from '../features/chat';
import { usersMiddleware } from '../features/authentication';
import { themeTypeMiddleware } from '../features/theme';

export const middlewares = [chatMessagesMiddleware, usersMiddleware, themeTypeMiddleware];
