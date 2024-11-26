process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const studentname = data.toString();
  process.stdout.write(`Your name is: ${studentname}`);
});
process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
