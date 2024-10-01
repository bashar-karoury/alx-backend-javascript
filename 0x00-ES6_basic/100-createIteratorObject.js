export default function createIteratorObject(report) {
  const array = [];
  for (const employees of Object.values(report.allEmployees)) {
    array.push(...employees);
  }
  return array;
}
