import React from 'react';
import classNames from 'classnames';
import styles from './Dot.module.scss';

const Dot: React.FC<{ color: string; className?: string }> = ({
  color,
  className
}) => (
  <span
    style={{ backgroundColor: color }}
    className={classNames(styles.dot, className)}
  ></span>
);

const memoized = React.memo(Dot);

export { memoized as Dot };
