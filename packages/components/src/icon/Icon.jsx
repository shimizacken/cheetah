import React from 'react';
import PropTypes from 'prop-types';

export const Icon = React.memo(({ src, alt, width, className }) => (
  <img className={className} src={src} alt={alt} width={width} />
));

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number
};

Icon.defaultProps = {
  width: 15
};
