interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any,
};

interface Directors extends Teacher {
	numberOfReports: number,
};

const teacher_1: Teacher = {
	firstName: 'Ali',
	lastName: 'Ahmed',
	fullTimeEmployee: true,
	yearsOfExperience: 7,
	location: 'Alhuda',
	subject: 'Math'
}
console.log(teacher_1);

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);


interface printTeacherFunction {
	(firstName: string, lastName: string): string,
};

const printTeacher: printTeacherFunction = (firstName: string, lastName) => `${firstName[0]} ${lastName}`;
console.log(printTeacher("John", "Doe"));


interface studentInterface {
	firstName: string,
	lastName: string
};

interface studentConstructor {
	(firstName: string, lastName: string): void
};
class StudentClass implements studentInterface {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
}

let student_object_1 = new StudentClass('bashar', 'karoury');
console.log(student_object_1);