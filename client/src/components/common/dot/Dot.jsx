import React from 'react';
import classNames from 'classnames';
import styles from './Dot.module.scss';

export const Dot = React.memo(({ className }) => <span className={classNames(styles['dot'], className)}></span>);
