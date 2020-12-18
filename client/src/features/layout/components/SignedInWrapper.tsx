import React from 'react';
import styles from './MainLayout.module.scss';

export const SignedInWrapper: React.FC = ({children}) => (
  <div className={styles['signed-in-wrapper']}>{children}</div>
);
