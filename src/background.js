chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.storage.sync.get(["visitedUrls"], (result) => {
      const visitedUrls = result.visitedUrls || [];
      visitedUrls.push(changeInfo.url);
      chrome.storage.sync.set({ visitedUrls: visitedUrls });
    });
  }
});
