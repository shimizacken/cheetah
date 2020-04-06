import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChatContainer } from '../chat/components/ChatContainer';
import { ParticipantsContainer } from '../participants/components/ParticipantsContainer';
import { useSelector } from 'react-redux';
import { selectUsers } from '../authentication/users/state/usersSelectors';
import { Tabs } from '../../components/common/tabs/Tabs';
import { MainHeader } from '../layout/components/MainHeader';
import { HeaderDisplayMode } from '../layout/bll/headerDisplayMode';

export const ChatRouter = () => {
  const users = useSelector(selectUsers);

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
    <div>
      <MainHeader mode={HeaderDisplayMode.COLLAPSE} />
      <Tabs tabs={tabs} onClick={tabClick} />
      <Switch>
        <Route exact path="/chat" component={ChatContainer} />
        <Route exact path="/participants" component={ParticipantsContainer} />
      </Switch>
    </div>
  );
};
