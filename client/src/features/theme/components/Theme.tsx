import React from 'react';
import {useSelector} from 'react-redux';
import {selectCurrentTheme} from '../state/themeSelectors';
import './Theme.scss';

export const Theme: React.FC = ({children}) => {
  const themeType = useSelector(selectCurrentTheme);
  const theme = themeType === 'dark' ? 'root-dark-theme' : 'root-default-theme';
  document.getElementsByTagName('body')[0].setAttribute('class', theme);

  return <div>{children}</div>;
};
