import PropTypes from 'prop-types';

export const messagePropTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userRef: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  edited: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired
};
