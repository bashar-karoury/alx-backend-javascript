export default function cleanSet(set, startString) {
  const array = [];
  if (!(set instanceof Set)) {
    return '';
  }
  set.forEach((str) => {
    if (startString && str.startsWith(startString)) {
      array.push(str.slice(startString.length));
    }
  });

  return array.join('-');
}
