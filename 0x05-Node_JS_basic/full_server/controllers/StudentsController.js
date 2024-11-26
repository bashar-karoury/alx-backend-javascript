const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    // get path
    const path = (process.argv.length > 2) ? process.argv[2] : '';
    readDatabase(path).then((data) => {
      let result = '';
      result += 'This is the list of our students\n';
      for (const [key, value] of Object.entries(data)) {
        result += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }
      response.status(200).send(result.trim());
    })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    // get major parameter
    const { major } = request.params;
    if (!major || !['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      // get path
      const path = (process.argv.length > 2) ? process.argv[2] : '';
      readDatabase(path).then((data) => {
        const result = `List: ${data[major].join(', ')}\n`;
        response.status(200).send(result.trim());
      })
        .catch((err) => {
          response.status(500).send(err.message);
        });
    }
  }
}

module.exports = StudentsController;
