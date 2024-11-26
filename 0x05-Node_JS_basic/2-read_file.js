const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const arr = data.split('\n').slice(1);
    const cs = [];
    const swe = [];
    for (const line of arr) {
      const fl = line.split(',').slice(-1)[0];
      const name = line.split(',').slice(0)[0];
      if (fl && fl === 'CS') {
        cs.push(name);
      } else if (fl && fl === 'SWE') {
        swe.push(name);
      }
    }
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length}. List:`, cs.join(', '));
    console.log(`Number of students in SWE: ${swe.length}. List:`, swe.join(', '));
  });
}

module.exports = countStudents;
