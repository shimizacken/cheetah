import React from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  Omit<React.ComponentPropsWithRef<'textarea'>, ''>
>(({ value, onChange, disabled, placeholder, className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={classNames(styles['text-input'], className)}
    onChange={onChange}
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    {...props}
  />
));

TextArea.displayName = 'TextArea';
