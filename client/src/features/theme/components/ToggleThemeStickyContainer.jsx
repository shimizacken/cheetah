import React from 'react';
import { ToggleTheme } from './ToggleTheme';
import styles from './ToggleTheme.module.scss';

export const ToggleThemeStickyContainer = () => (
  <div className={styles['root-toggle-theme-sticky']}>
    <ToggleTheme />
  </div>
);
