export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };
  return obj;
}
