import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Tabs.module.scss';

export const LinkTab = React.memo(({ text, id, url, selected, onClick, darkTheme }) => {
  const style = classNames(styles['tab'], selected && styles['selected'], darkTheme && styles['dark']);

  const click = () => onClick(id);

  if (selected) {
    return (
      <span onClick={click} className={style} data-value={id}>
        {text}
      </span>
    );
  }

  return (
    <Link className={style} onClick={click} data-value={id} to={url}>
      {text}
    </Link>
  );
});

LinkTab.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool
};

LinkTab.defaultProps = {
  darkTheme: false
};
