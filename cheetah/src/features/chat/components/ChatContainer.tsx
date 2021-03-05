import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {selectIsDarkMode} from '../../theme/state/themeSelectors';
import {ChatMessagesContainer} from './chatMessages/ChatMessagesContainer';
import {MessageInput} from './chatMessage/MessageInput';
import styles from './ChatContainer.module.scss';
import {getSocket} from '../../../packages/socket/src/socket';
import {ChatMessagesEvent} from '../../../packages/socket/savannah.types';

export const ChatContainer: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    const getAllChatMessages: ChatMessagesEvent = {
      type: 'chat-messages',
      messages: {}
    };

    getSocket()?.send(JSON.stringify(getAllChatMessages));
  }, []);

  return (
    <div
      className={classNames(
        styles['chat-wrapper'],
        isDarkMode && styles['dark']
      )}
    >
      <ChatMessagesContainer />
      <MessageInput />
    </div>
  );
};
