export default function (set, array) {
  if (!array.length || !set.size) {
    return false;
  }
  return array.every((element) => set.has(element));
  // return (new Set(array)).isSubsetOf(set);
}
