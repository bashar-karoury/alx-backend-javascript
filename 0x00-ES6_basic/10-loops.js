export default function appendToEachArrayValue(array, appendString) {
  const returedarray = [];
  for (const value of array) {
    returedarray.push(appendString + value);
  }

  return returedarray;
}
