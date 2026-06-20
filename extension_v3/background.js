const rules = [
  {
    "id": 1,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
        "url": `chrome-extension://${chrome.runtime.id}/redirected.js`
      }
    },
    "condition": {
      "urlFilter": "https://d0gkiller87.github.io/pending-brave-shields/redirect_me.js"
    }
  }
];

chrome.runtime.onInstalled.addListener(async () => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(rule => rule.id),
    addRules: rules
  });
});
