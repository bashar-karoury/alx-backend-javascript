export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((o) => o.id);
  }
  return [];
}
