#!/usr/bin/node

process.stdin.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdin.write(`Your name is: ${data.toString().trim()}\n`);
  process.exit();
});

process.stdin.on('end', () => {
  process.stdin.write('This important software is now closing\n');
  process.exit()
});
