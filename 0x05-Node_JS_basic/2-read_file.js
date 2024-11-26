#!/usr/bin/node
/** Reading a file synchronously with Node JS */
const fs = require('fs');

const countStudents = function countStudents(path) {
  try {
    const studentData = fs.readFileSync(path, 'utf-8');
    const trimmedData = studentData.replace(/\n+$/, '');
    const lines = trimmedData.split('\n');
    console.log(`Number of students: ${lines.length - 1}`);
    // console.log(lines);
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
  } catch (err) {
    console.error(err);
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
