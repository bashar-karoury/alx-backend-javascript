const http = require('http');
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
      resolve(result);
    });
  });
};

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2]).then((data) => {
      res.end(`This is the list of our students\n${data}`);
    }).catch((err) => res.end(err.message));
  }
});
app.listen(1245);
module.exports = app;
