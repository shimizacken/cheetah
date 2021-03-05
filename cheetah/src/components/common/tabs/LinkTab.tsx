import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import styles from './Tabs.module.scss';

export const LinkTab: React.FC<{
  text: string;
  id: number;
  url: string;
  selected: boolean;
  onClick: (id: number) => void;
  darkTheme: boolean;
}> = ({text, id, url, selected, onClick, darkTheme}) => {
  const style = classNames(
    styles['tab'],
    selected && styles['selected'],
    darkTheme && styles['dark']
  );

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
};
