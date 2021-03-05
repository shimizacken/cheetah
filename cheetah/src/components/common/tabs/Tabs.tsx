import React from 'react';
import classNames from 'classnames';
import {LinkTab} from './LinkTab';
import styles from './Tabs.module.scss';
import {Tab} from '../../../features/chat/bll/clickChatTab';

export const Tabs: React.FC<{
  tabs: Tab[];
  onClick: (tabId: number) => void;
  darkTheme: boolean;
}> = ({tabs, onClick, darkTheme}) => (
  <div
    className={classNames(styles['tabs-wrapper'], darkTheme && styles['dark'])}
  >
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
