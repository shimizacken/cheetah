import React from 'react';
import defaultLogo from '../../../assets/default-logo-2.png';
import smallLogo from '../../../assets/small-logo.png';
import { HeaderDisplayMode } from '../bll/headerDisplayMode';
import { SignOutContainer } from '../../authentication/users/component/SignOutContainer';
import { Icon } from '../../../components/common/icon/Icon';
import styles from './MainHeader.module.scss';

export const MainHeader = ({ mode }) => {
  if (mode === HeaderDisplayMode.DEFAULT) {
    return <img src={defaultLogo} alt="Cheetah chat" />;
  }

  return (
    <div className={styles['main-header']}>
      <Icon src={smallLogo} alt="Cheetah chat" width={50} className={styles.logo} />
      <SignOutContainer />
    </div>
  );
};
