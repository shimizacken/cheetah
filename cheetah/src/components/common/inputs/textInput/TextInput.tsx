import React from 'react';
import classNames from 'classnames';
import {TextInputTypes} from './textInputTypes';
import styles from './TextInput.module.scss';

export const TextInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentPropsWithRef<'input'>, ''> & {
    inputType?: TextInputTypes;
  }
>(
  (
    {
      value,
      onChange,
      disabled,
      placeholder,
      className,
      inputType = TextInputTypes.TEXT,
      ...props
    },
    ref
  ) => (
    <input
      ref={ref}
      className={classNames(styles['text-input'], className)}
      type={inputType}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  )
);

TextInput.displayName = 'TextInput';
