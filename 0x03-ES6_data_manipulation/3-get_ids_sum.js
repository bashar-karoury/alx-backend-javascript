export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.reduce(
      (accumulator, o) => accumulator + o.id,
      0,
    );
  }
  return 0; // TBT
}
