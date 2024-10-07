export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const createdArray = new Int8Array(buffer);
  createdArray[position] = value;
  return new DataView(buffer);
}
