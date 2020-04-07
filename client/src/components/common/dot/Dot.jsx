import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Dot.module.scss';

export const Dot = React.memo(({ color, className }) => (
  <span style={{ backgroundColor: color }} className={classNames(styles['dot'], className)}></span>
));

Dot.propTypes = {
  color: PropTypes.string
};

Dot.defaultProps = {
  color: ''
};
