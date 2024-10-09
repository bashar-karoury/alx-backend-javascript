interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[key: string]: any,
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