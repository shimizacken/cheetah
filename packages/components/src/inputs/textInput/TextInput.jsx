import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputTypes } from './textInputTypes';
import styles from './TextInput.module.scss';

export const TextInput = React.forwardRef(({ value, onChange, disabled, placeholder, className, inputType }, ref) => {
  if (inputType === TextInputTypes.MULTILINE) {
    return (
      <textarea
        ref={ref}
        className={classNames(styles['text-input'], className)}
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      ref={ref}
      className={classNames(styles['text-input'], className)}
      type={inputType}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
});

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  inputType: PropTypes.oneOf(Object.values(TextInputTypes))
};

TextInput.defaultProps = {
  disabled: false,
  onChange: undefined,
  inputType: TextInputTypes.TEXT
};
