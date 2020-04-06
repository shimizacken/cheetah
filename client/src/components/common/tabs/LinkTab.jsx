import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Tabs.module.scss';

export const LinkTab = React.memo(({ text, id, url, selected, onClick }) => {
  const style = classNames(styles['tab'], selected && styles['selected']);

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
