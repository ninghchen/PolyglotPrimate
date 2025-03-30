chrome.runtime.onInstalled.addListener(() => {
  //side panel open by clicking extension icon
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

  chrome.sidePanel.setOptions({
    path: "popup.html",
    enabled: true
  });
});

// manual open
chrome.action.onClicked.addListener(async (tab) => {
  await chrome.sidePanel.open({ tabId: tab.id });
});
