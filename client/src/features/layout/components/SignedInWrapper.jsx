import React from 'react';
import styles from './MainLayout.module.scss';

export const SignedInWrapper = ({ children }) => {
  return <div className={styles['signed-in-wrapper']}>{children}</div>;
};
