import React from 'react';
import { Dot } from '../../../../components/common/dot/Dot';

export type DotColors = 'greenyellow' | 'darkgray';

const ActiveUserDot: React.FC<{ active: boolean }> = ({ active = true }) => {
  if (active) {
    return <Dot color="greenyellow" />;
  }

  return <Dot color="darkgray" />;
};

const memoized = React.memo(ActiveUserDot);

export { memoized as ActiveUserDot };
