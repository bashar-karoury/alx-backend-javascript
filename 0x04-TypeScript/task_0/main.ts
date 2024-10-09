interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
};

const student_1: Student = {
	firstName: "Basil",
	lastName: "Hassan",
	age: 14,
	location: 'Nori',
};

const student_2: Student = {
	firstName: "Ahmed",
	lastName: "Ali",
	age: 11,
	location: 'Khartoum',
};

const studentsList = [student_1, student_2];
const table = document.createElement('table');

studentsList.forEach((student) => {
	const row = document.createElement('tr');  // Create a row
	const cell = document.createElement('td');  // Create a cell
	const cellText = document.createTextNode(`${student.firstName}`);
	cell.appendChild(cellText);  // Add text to the cell
	row.appendChild(cell);  // Append the cell to the row
	table.appendChild(row); // Append the row to the table
});
document.body.appendChild(table);
