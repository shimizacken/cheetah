import React from 'react';
import { LinkTab } from './LinkTab';
import styles from './Tabs.module.scss';

export const Tabs = ({ tabs, onClick }) => {
  return (
    <div className={styles['tabs-wrapper']}>
      {tabs?.map((tab) => {
        return (
          <LinkTab key={tab.id} id={tab.id} text={tab.text} url={tab.url} selected={tab.selected} onClick={onClick} />
        );
      })}
    </div>
  );
};
