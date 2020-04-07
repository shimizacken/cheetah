import React from 'react';
import DeleteIcon from '../../../../assets/delete.png';
import EditIcon from '../../../../assets/pencil.png';
import CheckmarkIcon from '../../../../assets/save.png';
import CancelIcon from '../../../../assets/cancel.png';
import { IconButton } from '../../../../components/common/button/IconButton';

export const DeleteButton = React.memo(({ onClick }) => <IconButton onClick={onClick} src={DeleteIcon} alt="delete" />);

export const EditButton = React.memo(({ onClick }) => <IconButton onClick={onClick} src={EditIcon} alt="Edit" />);

export const CancelButton = React.memo(({ onClick }) => <IconButton onClick={onClick} src={CancelIcon} alt="Cancel" />);

export const CheckmarkButton = React.memo(({ onClick }) => (
  <IconButton onClick={onClick} src={CheckmarkIcon} alt="Save" />
));
