// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.message === "urlClicked") {
//     console.log("hello");
//   }
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("hello");
  if (changeInfo.url) {
    chrome.storage.sync.get(["visitedUrls"], (result) => {
      const visitedUrls = result.visitedUrls || [];
      visitedUrls.push(changeInfo.url);
      console.log(visitedUrls);
      chrome.storage.sync.set({ visitedUrls: visitedUrls });
    });
  }
});
