import React from 'react';
import DeleteIcon from '../../../../assets/icons/png/delete.png';
import DeleteIconLight from '../../../../assets/icons/png/delete-light.png';
import EditIcon from '../../../../assets/icons/png/pencil.png';
import EditIconLight from '../../../../assets/icons/png/pencil-light.png';
import CheckmarkIcon from '../../../../assets/icons/png/save.png';
import CancelIcon from '../../../../assets/icons/png/cancel.png';
import {IconButton} from '../../../../components/common/button/IconButton';

export const DeleteButton: React.FC<{
  onClick: () => void;
  darkTheme: boolean;
}> = ({onClick, darkTheme}) => (
  <IconButton
    onClick={onClick}
    src={darkTheme ? DeleteIconLight : DeleteIcon}
    alt="delete"
  />
);

export const EditButton: React.FC<{
  onClick: () => void;
  darkTheme: boolean;
}> = ({onClick, darkTheme}) => (
  <IconButton
    onClick={onClick}
    src={darkTheme ? EditIconLight : EditIcon}
    alt="Edit"
  />
);

export const CancelButton: React.FC<{onClick: () => void}> = ({onClick}) => (
  <IconButton onClick={onClick} src={CancelIcon} alt="Cancel" />
);

export const CheckmarkButton: React.FC<{onClick: () => void}> = ({onClick}) => (
  <IconButton onClick={onClick} src={CheckmarkIcon} alt="Save" />
);
