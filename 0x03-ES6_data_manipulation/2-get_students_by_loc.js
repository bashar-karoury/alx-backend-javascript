export default function getListStudentIds(array, city) {
  if (Array.isArray(array)) {
    return array.filter((o) => o.location === city);
  }
  return [];
}
