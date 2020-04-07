import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { ChatMessageContainer } from './ChatMessageContainer';
import { messagePropTypes } from './chatMessage/messagePropTypes';

export const ChatMessages = ({ messages }) => {
  if (isEmpty(messages)) {
    return null;
  }

  return Object.values(messages).map((message) => {
    return <ChatMessageContainer key={message.id} message={message} />;
  });
};

ChatMessages.propTypes = {
  message: PropTypes.arrayOf(PropTypes.shape(messagePropTypes))
};

ChatMessages.defaultProps = {
  message: []
};
