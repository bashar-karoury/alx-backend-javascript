export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    // console.log('type of name is ', typeof name);
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name; // eslint-disable-line 
  }

  get name() {
    return this._name; // eslint-disable-line 
  }

  set length(length) {
    // console.log('type of length is ', typeof length);
    if (typeof length !== 'number') {
      throw new Error('length must be a Number');
    }
    this._length = length; // eslint-disable-line 
  }

  get length() {
    return this._length; // eslint-disable-line 
  }

  set students(students) {
    // console.log('type of students is ', typeof students);
    if (!(students instanceof Array)) {
      throw new Error('students must be a array');
    }
    this._students = students; // eslint-disable-line 
  }

  get students() {
    return this._students; // eslint-disable-line 
  }
}
