const webview = require('webview');

// Define options for the webview window
const options = {
  title: 'Blinkr',
  url: 'https://pfm-search.sytes.net',
  width: 1200,
  height: 800,
  resizable: true,
  // You can also specify additional options like 'dir' if needed
};

// Launch the webview window
webview.spawn(options);

console.log(webview.binaryPath);