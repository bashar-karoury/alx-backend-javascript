export default function (set, array) {
  return (new Set(array)).isSubsetOf(set);
}
