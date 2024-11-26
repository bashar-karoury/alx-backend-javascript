const express = require('express');

const app = express();
const PORT = 1245;
const fs = require('fs');

const countStudents = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      let result = '';
      const trimmedData = data.replace(/\n+$/, '');
      const lines = trimmedData.split('\n');
      result += `Number of students: ${lines.length - 1}\n`;
      const fieldsData = {};
      for (const line of lines.slice(1)) {
        const studentFields = line.split(',');
        const [first, , , last] = studentFields;
        if (!fieldsData[last]) {
          fieldsData[last] = [];
        }
        fieldsData[last].push(first);
      }
      for (const [key, value] of Object.entries(fieldsData)) {
        result += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }
      resolve(result.trim());
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv.length > 2 ? process.argv[2] : '';
  countStudents(path).then((data) => {
    res.end(`This is the list of our students\n${data}`);
  }).catch((err) => res.end(err.message));
});

app.listen(PORT);

module.exports = app;
