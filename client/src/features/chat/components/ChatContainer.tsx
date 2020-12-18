import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {initChatWebSocket} from '../bll/network/messagesLoader';
import {selectIsDarkMode} from '../../theme/state/themeSelectors';
import {ChatMessagesContainer} from './chatMessages/ChatMessagesContainer';
import {MessageInput} from './chatMessage/MessageInput';
import styles from './ChatContainer.module.scss';

export const ChatContainer: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => initChatWebSocket(), []);

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
