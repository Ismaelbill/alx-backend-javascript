#!/usr/bin/node

function cleanSet(set, startString) {
  let str = '';

  if (startString.length === 0 || String(set).slice(8, 11) !== 'Set') {
    return str;
  }

  for (const word of Array(...set)) {
    if (typeof word === 'string' && word.startsWith(startString)) {
      str = str.concat(word.slice(startString.length), '-');
    }
  }
  return str.slice(0, str.length - 1);
}
export default cleanSet;
