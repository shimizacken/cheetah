import React from 'react';
import img from '../../../assets/leopard_1f406.png';
import { HeaderDisplayMode } from '../../../App';
import styles from './MainHeader.module.scss';

export const MainHeader = ({ mode }) => {
  if (mode === HeaderDisplayMode.DEFAULT) {
    return <img src={img} alt="Cheetah" />;
  }

  return (
    <div className={styles['main-header']}>
      <img src={img} alt="Cheetah" width={50} className={styles.logo} />
    </div>
  );
};
