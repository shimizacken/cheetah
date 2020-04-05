import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './TextInput.module.scss';

export const TextInput = ({ value, onChange, disabled, placeholder, className }) => (
  <input
    className={classNames(styles.textInput, className)}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
  />
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  disabled: false,
  onChange: undefined
};
