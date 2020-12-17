export type Tab = {
  id: number;
  text: string;
  url: string;
  selected: boolean;
};

export const clickChatTab = (tabs: Tab[], tabId: number) => {
  return tabs.map((tab) => {
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
};
