import React from 'react';
import DeleteIcon from '../../../assets/delete.png';
import EditIcon from '../../../assets/pencil.png';
import CheckmarkIcon from '../../../assets/green-checkmark.png';
import { IconButton } from '../../../components/common/button/IconButton';

export const DeleteButton = React.memo(({ onClick }) => <IconButton onClick={onClick} src={DeleteIcon} alt="delete" />);

export const EditButton = React.memo(({ onClick }) => <IconButton onClick={onClick} src={EditIcon} alt="Edit" />);

export const CheckmarkButton = React.memo(({ onClick }) => (
  <IconButton onClick={onClick} src={CheckmarkIcon} alt="Save" />
));
