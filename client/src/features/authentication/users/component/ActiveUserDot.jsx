import React from 'react';
import PropTypes from 'prop-types';
import { Dot } from '../../../../components/common/dot/Dot';

export const DotColors = {
  GREENYELLOW: 'greenyellow',
  DARKGRAY: 'darkgray'
};

export const ActiveUserDot = React.memo(({ active }) => {
  if (active) {
    return <Dot color={DotColors.GREENYELLOW} />;
  }

  return <Dot color={DotColors.DARKGRAY} />;
});

ActiveUserDot.propTypes = {
  active: PropTypes.bool
};

ActiveUserDot.defaultProps = {
  active: true
};
