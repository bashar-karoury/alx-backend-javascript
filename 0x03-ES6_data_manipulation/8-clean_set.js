export default function cleanSet(set, startString) {
  const array = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  set.forEach((str) => {
    if (str && startString && str.startsWith(startString)) {
      array.push(str.slice(startString.length));
    }
  });

  return array.join('-');
}
