export default function (set, array) {
  if (!array.length || !set.size) {
    return false;
  }
  return (new Set(array)).isSubsetOf(set);
}
