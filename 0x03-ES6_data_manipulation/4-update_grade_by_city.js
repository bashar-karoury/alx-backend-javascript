export default function getListStudentIds(students, city, newGrades) {
  if (Array.isArray(students)) {
    const cityStudents = students.filter((o) => o.location === city);
    cityStudents.forEach((student) => {
      const found = newGrades.find((entry) => entry.studentId === student.id);
      student.grade = (found) ? found.grade : 'N/A';  // eslint-disable-line 
    });
    return cityStudents;
  }
  return undefined;
}
