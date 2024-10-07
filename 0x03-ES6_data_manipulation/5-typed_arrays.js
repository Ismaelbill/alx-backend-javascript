#!/usr/bin/node

function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  try {
    view.setUint8(position, value);
  } catch (s) {
    throw Error('Position outside range');
  }
  return view;
}
export default createInt8TypedArray;
