import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon/Icon';
import styles from './IconButton.module.scss';

export const IconButton = ({ onClick, src, alt, width }) => (
  <span onClick={onClick} className={styles['icon-button']}>
    <Icon src={src} alt={alt} width={width} />
  </span>
);

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number
};

IconButton.defaultProps = {
  width: 15
};
