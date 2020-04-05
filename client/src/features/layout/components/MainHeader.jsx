import React from 'react';
import img from '../../../assets/leopard_1f406.png';

export const MainHeader = ({ mode }) => {
  if (mode === 'default') {
    return <img src={img} alt="Cheetah" />;
  }

  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <img src={img} alt="Cheetah" />
    </div>
  );
};
