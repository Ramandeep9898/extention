function handleLinkClick(event) {
  const clickedUrl = event.target.href;
  if (clickedUrl) {
    chrome.runtime.sendMessage({
      message: "urlClicked",
    });
  }
}

document.addEventListener("click", handleLinkClick);
