console.log('Welcome to Holberton School, what is your name? ');
process.stdin.on('data', (data) => {
  const studentname = data.toString();
  console.log(`Your name is: ${studentname}`);
});
process.stdin.on('close', () => {
  console.log('This important software is now closing');
});
