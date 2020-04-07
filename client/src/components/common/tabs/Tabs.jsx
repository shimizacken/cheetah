import React from 'react';
import classNames from 'classnames';
import { LinkTab } from './LinkTab';
import styles from './Tabs.module.scss';

export const Tabs = ({ tabs, onClick, darkTheme }) => (
  <div className={classNames(styles['tabs-wrapper'], darkTheme && styles['dark'])}>
    {tabs?.map((tab) => {
      return (
        <LinkTab
          key={tab.id}
          id={tab.id}
          text={tab.text}
          url={tab.url}
          selected={tab.selected}
          darkTheme={darkTheme}
          onClick={onClick}
        />
      );
    })}
  </div>
);
