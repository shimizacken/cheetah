import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { messagePropTypes } from './chatMessage/messagePropTypes';
import { ChatMessageContainer } from './chatMessage/ChatMessageContainer';

export const ChatMessages = ({ messages }) => {
  if (isEmpty(messages)) {
    return null;
  }

  return Object.values(messages).map((message) => <ChatMessageContainer key={message.id} message={message} />);
};

ChatMessages.propTypes = {
  message: PropTypes.arrayOf(PropTypes.shape(messagePropTypes))
};

ChatMessages.defaultProps = {
  message: []
};
