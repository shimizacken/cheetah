import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeTypes } from '../bll/themeTypes';
import { toggleTheme } from '../state/actions';
import { IconButton } from '../../../components/common/button/IconButton';
import BulbOn from '../../../assets/bulb-on.png';
import BulbOff from '../../../assets/bulb-off.png';
import { selectIsDarkMode } from '../state/themeSelectors';
import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const toggle = (e) => {
    if (isDarkMode) {
      dispatch(toggleTheme(ThemeTypes.light));
    } else {
      dispatch(toggleTheme(ThemeTypes.dark));
    }
  };

  return (
    <div className={styles['root-toggle-theme']}>
      <IconButton src={isDarkMode ? BulbOff : BulbOn} alt="Toggle theme" onClick={toggle} width={50} />
    </div>
  );
};
