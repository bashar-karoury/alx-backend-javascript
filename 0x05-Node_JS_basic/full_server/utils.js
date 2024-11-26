const fs = require('fs');

const readDatabase = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(Error('Cannot load the database'));
      return;
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const trimmedData = data.replace(/\n+$/, '');
      const lines = trimmedData.split('\n');
      const fieldsData = {};
      for (const line of lines.slice(1)) {
        const studentFields = line.split(',');
        const [first, , , last] = studentFields;
        if (!fieldsData[last]) {
          fieldsData[last] = [];
        }
        fieldsData[last].push(first);
      }
      resolve(fieldsData);
    });
  });
};

module.exports = readDatabase;
