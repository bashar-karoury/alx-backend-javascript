export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let notFirst = false;
  for (const employee of reportWithIterator) {
    if (notFirst) {
      str += ' | ';
    }
    str += employee;
    notFirst = true;
  }
  return str;
}
