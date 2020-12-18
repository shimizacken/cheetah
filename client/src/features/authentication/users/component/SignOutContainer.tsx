import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SignOffDay from '../../../../assets/turn-off-day.png';
import SignOffNight from '../../../../assets/turn-off-night.png';
import {IconButton} from '../../../../components/common/button/IconButton';
import {selectIsDarkMode} from '../../../theme/state/themeSelectors';
import {signOut} from '../state/usersActions';
import {selectCurrentUserId} from '../state/usersSelectors';

export const SignOutContainer: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const currentUserId = useSelector(selectCurrentUserId);

  const signOff = () => {
    dispatch(signOut(currentUserId));
  };

  return (
    <IconButton
      src={isDarkMode ? SignOffNight : SignOffDay}
      alt="Sign off"
      width={50}
      onClick={signOff}
    />
  );
});
