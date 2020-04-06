import React from 'react';
import { Tab } from './Tab';
import styles from './Tabs.module.scss';

export const Tabs = ({ tabs, onClick }) => {
  return (
    <div className={styles['tabs-wrapper']}>
      {tabs?.map((tab) => {
        return <Tab key={tab.id} id={tab.id} text={tab.text} selected={tab.selected} onClick={onClick} />;
      })}
    </div>
  );
};
