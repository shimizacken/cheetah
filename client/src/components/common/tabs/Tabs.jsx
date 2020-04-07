import React from 'react';
import PropTypes from 'prop-types';
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

const tabShape = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(tabShape)).isRequired,
  onClick: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool
};

Tabs.defaultProps = {
  darkTheme: false
};
