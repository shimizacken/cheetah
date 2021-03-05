import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectUsers} from '../../authentication/users/state/usersSelectors';
import {selectCurrentTheme} from '../../theme/state/themeSelectors';
import {Tabs} from '../../../components/common/tabs/Tabs';
import {buildChatTabs} from '../bll/buildChatTabs';
import {clickChatTab} from '../bll/clickChatTab';

export const ChatTabsContainer: React.FC = () => {
  const users = useSelector(selectUsers);
  const usersLength = Object.values(users).length;
  const themeType = useSelector(selectCurrentTheme);
  const chatTabs = buildChatTabs(usersLength);
  const [tabs, setTabs] = useState(chatTabs);

  const tabClick = (tabId: number) => {
    const newTabs = clickChatTab(tabs, tabId);

    setTabs(newTabs);
  };

  useEffect(() => {
    const newTabs = buildChatTabs(usersLength);
    setTabs(newTabs);
  }, [usersLength]);

  return (
    <Tabs tabs={tabs} onClick={tabClick} darkTheme={themeType === 'dark'} />
  );
};
