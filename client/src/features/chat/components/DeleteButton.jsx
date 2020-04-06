import React from 'react';
import DeleteIcon from '../../../assets/delete.png';
import EditIcon from '../../../assets/pencil.png';
import CheckmarkIcon from '../../../assets/green-checkmark.png';
import styles from './ChatMessage.module.scss';

export const DeleteButton = React.memo(({ onClick }) => (
  <span onClick={onClick} className={styles['delete']}>
    <img src={DeleteIcon} alt="delete" width={15} />
  </span>
));

export const EditButton = React.memo(({ onClick }) => (
  <span onClick={onClick} className={styles['delete']}>
    <img src={EditIcon} alt="delete" width={15} />
  </span>
));

export const CheckmarkButton = React.memo(({ onClick }) => (
  <span onClick={onClick} className={styles['delete']}>
    <img src={CheckmarkIcon} alt="delete" width={15} />
  </span>
));
