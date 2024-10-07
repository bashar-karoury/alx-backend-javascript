export const weakMap = new WeakMap();

export function queryAPI(obj) {
  // get current count, 0 if not exists
  if (weakMap.has(obj)) {
    let numberOfQueries = weakMap.get(obj);
    numberOfQueries += 1;
    weakMap.set(obj, numberOfQueries);
    if (numberOfQueries >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(obj, 1);
  }
}
