import React from 'react';
import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = ({children}) => (
  <div className={styles['main-wrapper']}>{children}</div>
);
