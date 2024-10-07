#!/usr/bin/node

function updateUniqueItems(map) {
  try {
    map.forEach((val, key) => {
      if (val === 1) {
        map.set(key, 100);
      }
    });
  } catch (s) {
    throw new Error('Cannot process');
  }
}
export default updateUniqueItems;
