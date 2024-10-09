/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

import { Subjects } from './subjects/Teacher';
// create and export a constant cpp for Cpp Subjects
const cpp = new Subjects.Cpp();
// create and export a constant java for Java Subjects
const java = new Subjects.Java();
// create and export a constant react for React Subjects
const react = new Subjects.React();
// create and export one Teacher object cTeacher with experienceTeachingC = 10
const cTeacher: Subjects.Teacher = {
	firstName: 'Sam',
	lastName: 'Green',
}
// for Cpp subject, log to the console C++, set cTeacher as the teacher, 
// call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// for Java subject, log to the console Java, set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// for React subject, log to the console React, set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());