import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeTypes } from '../bll/themeTypes';
import { selectCurrentTheme } from '../state/themeSelectors';
import styles from './Theme.module.scss';

export const Theme = ({ children }) => {
  const themeType = useSelector(selectCurrentTheme);
  const theme = themeType === ThemeTypes.dark ? styles['root-dark-theme'] : styles['root-default-theme'];
  document.getElementsByTagName('body')[0].setAttribute('class', theme);

  return <div>{children}</div>;
};

Theme.propTypes = {
  children: PropTypes.node
};

Theme.defaultProps = {
  children: undefined
};
