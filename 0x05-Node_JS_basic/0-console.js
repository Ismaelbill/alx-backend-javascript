#!/usr/bin/node

function displayMessage(str) {
  process.stdout.write(`${str}\n`);
}

module.exports = displayMessage;
