import React from 'react';
import classNames from 'classnames';
import styles from './Tabs.module.scss';

export const Tab = React.memo(({ text, id, selected, onClick }) => {
  const style = classNames(styles['tab'], selected && styles['selected']);

  return (
    <button className={style} onClick={onClick} value={id}>
      {text}
    </button>
  );
});
