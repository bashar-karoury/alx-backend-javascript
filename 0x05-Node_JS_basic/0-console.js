#!/usr/bin/node
/** module with displayMessage */
const displayMessage = function displayMessage(msg) {
  console.log(msg);
  // process.stdout.write(msg);
  // process.stdout.write('\n');
};

module.exports = displayMessage;
