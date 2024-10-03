export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // eslint-disable-line  
    this._location = location; // eslint-disable-line  
  }

  get year() {
    return this._year; // eslint-disable-line  
  }

  get location() {
    return this._location; // eslint-disable-line  
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // eslint-disable-line  
    this._lastName = lastName; // eslint-disable-line  
    this._holbertonClass = holbertonClass; // eslint-disable-line  
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`; // eslint-disable-line  
  }

  get holbertonClass() {
    return this._holbertonClass; // eslint-disable-line  
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // eslint-disable-line  
  }
}
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
