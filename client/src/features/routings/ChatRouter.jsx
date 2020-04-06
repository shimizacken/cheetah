import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChatContainer } from '../chat/components/ChatContainer';
import { ParticipantsContainer } from '../participants/components/ParticipantsContainer';
import { useSelector } from 'react-redux';
import { selectUsers } from '../authentication/users/state/usersSelectors';
import { Tabs } from '../../components/common/tabs/Tabs';
import { MainHeader } from '../layout/components/MainHeader';
import { HeaderDisplayMode } from '../layout/bll/headerDisplayMode';
import { SignedInWrapper } from '../layout/components/SignedInWrapper';
import { selectCurrentTheme } from '../theme/state/themeSelectors';
import { ThemeTypes } from '../theme/bll/themeTypes';

export const ChatRouter = () => {
  const users = useSelector(selectUsers);
  const themeType = useSelector(selectCurrentTheme);

  const chatTabs = [
    {
      id: 1,
      text: `Participants (${Object.values(users).length})`,
      url: '/participants',
      selected: false
    },
    {
      id: 2,
      text: 'Chat',
      url: '/chat',
      selected: true
    }
  ];

  const [tabs, setTabs] = useState(chatTabs);

  const tabClick = (tabId) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === tabId) {
        return {
          ...tab,
          selected: true
        };
      }

      return {
        ...tab,
        selected: false
      };
    });

    setTabs(newTabs);
  };

  return (
    <SignedInWrapper>
      <MainHeader mode={HeaderDisplayMode.COLLAPSE} />
      <Tabs tabs={tabs} onClick={tabClick} darkTheme={themeType === ThemeTypes.dark} />
      <Switch>
        <Route exact path="/chat" component={ChatContainer} />
        <Route exact path="/participants" component={ParticipantsContainer} />
      </Switch>
    </SignedInWrapper>
  );
};
