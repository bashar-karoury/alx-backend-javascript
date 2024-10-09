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