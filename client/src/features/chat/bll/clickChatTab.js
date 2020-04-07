export const clickChatTab = (tabs, tabId) => {
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
