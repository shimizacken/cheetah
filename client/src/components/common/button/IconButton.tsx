import React from 'react';
import { Icon } from '../icon/Icon';
import styles from './IconButton.module.scss';

export const IconButton: React.FC<
  React.ComponentProps<'img'> & { src: string }
> = ({ onClick, src, alt, width = 15, ...props }) => (
  <span onClick={onClick} className={styles['icon-button']} {...props}>
    <Icon src={src} alt={alt} width={width} />
  </span>
);
