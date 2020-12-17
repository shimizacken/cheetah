import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toggleTheme } from '../state/actions';
import { IconButton } from '../../../components/common/button/IconButton';
import BulbOn from '../../../assets/bulb-on.png';
import BulbOff from '../../../assets/bulb-off.png';
import { selectIsDarkMode } from '../state/themeSelectors';
import styles from './ToggleTheme.module.scss';

export const ToggleTheme = ({ className }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const toggle = () =>
    isDarkMode ? dispatch(toggleTheme('light')) : dispatch(toggleTheme('dark'));

  return (
    <div className={classNames(styles['root-toggle-theme'], className)}>
      <IconButton
        src={isDarkMode ? BulbOff : BulbOn}
        alt="Toggle theme"
        onClick={toggle}
        width={50}
      />
    </div>
  );
};

ToggleTheme.propTypes = {
  className: PropTypes.string
};

ToggleTheme.defaultProps = {
  className: undefined
};
