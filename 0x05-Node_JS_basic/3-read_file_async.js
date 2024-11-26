#!/usr/bin/node
/** Reading a file saynchronously with Node JS */
const fs = require('fs');

const countStudents = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const trimmedData = data.replace(/\n+$/, '');
      const lines = trimmedData.split('\n');
      console.log(`Number of students: ${lines.length - 1}`);
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
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      resolve();
    });
  });
};

module.exports = countStudents;
