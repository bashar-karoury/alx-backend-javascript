#!/usr/bin/node
const displayMessage = function displayMessage(msg) {
  process.stdout.write(msg);
  process.stdout.write('\n');
};

module.exports = displayMessage;
