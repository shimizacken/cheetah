import React from 'react';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }) => {
  return <div className={styles['main-wrapper']}>{children}</div>;
};
