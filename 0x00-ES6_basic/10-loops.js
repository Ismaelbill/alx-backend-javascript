#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    const i = array.indexOf(val);
    array[i] = appendString + val; // eslint-disable-line no-param-reassign
  }

  return array;
}
