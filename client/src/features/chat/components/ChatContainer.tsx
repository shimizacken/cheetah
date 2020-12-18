import React from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {selectIsDarkMode} from '../../theme/state/themeSelectors';
import {ChatMessagesContainer} from './chatMessages/ChatMessagesContainer';
import {MessageInput} from './chatMessage/MessageInput';
import styles from './ChatContainer.module.scss';

export const ChatContainer: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

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
