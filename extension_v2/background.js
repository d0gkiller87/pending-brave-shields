chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl: `chrome-extension://${chrome.runtime.id}/redirected.js` };
  },
  {
    urls: [
      "https://d0gkiller87.github.io/pending-brave-shields/redirect_me.js"
    ]
  },
  ["blocking"]
);
