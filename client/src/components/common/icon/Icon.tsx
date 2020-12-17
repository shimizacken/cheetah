import React from 'react';

const Icon: React.FC<React.ComponentProps<'img'> & { src: string }> = ({
  onClick,
  src,
  alt,
  width = 15,
  className,
  ...props
}) => <img className={className} src={src} alt={alt} width={width} />;

const memoized = React.memo(Icon);

export { memoized as Icon };
