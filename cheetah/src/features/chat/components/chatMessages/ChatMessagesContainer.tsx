import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {ChatMessages} from './ChatMessages';
import {selectMessages} from '../../state/chatMessagesSelectors';
import styles from './ChatMessagesContainer.module.scss';

export const ChatMessagesContainer: React.FC = () => {
  const messages = useSelector(selectMessages);
  const bottomEl = useRef<HTMLDivElement>(null);

  const scrollToBottom = (scrollOptions?: ScrollIntoViewOptions) => {
    setTimeout(() => bottomEl?.current?.scrollIntoView(scrollOptions));
  };

  useEffect(() => scrollToBottom({behavior: 'smooth'}));

  useEffect(() => scrollToBottom(), []);

  return (
    <div className={styles.messages}>
      <ChatMessages messages={messages} />
      <div ref={bottomEl} className={styles['bottom-element']} />
    </div>
  );
};
