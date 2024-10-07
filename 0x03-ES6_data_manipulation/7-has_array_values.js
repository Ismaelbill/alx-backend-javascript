#!/usr/bin/node

function hasValuesFromArray(set, arr) {
  for (const j of arr) {
    if (!set.has(j)) {
      return false;
    }
  }
  return true;
}
export default hasValuesFromArray;
