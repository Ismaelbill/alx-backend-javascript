const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const arr = data.split('\n').slice(1);
    const obj = {};
    let students = 0;
    for (const line of arr) {
      if (line) {
        const fl = line.split(',').slice(-1)[0];
        const name = line.split(',').slice(0)[0];
        if (!obj[fl]) {
          obj[fl] = '';
        }
        obj[fl] += `${name}, `;
        students += 1;
      }
    }

    console.log(`Number of students: ${students}`);
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      const key = Object.keys(obj)[i];
      const val = String(Object.values(obj)[i]).slice(0, -2);
      console.log(`Number of students in ${key}: ${val.split(', ').length}. List:`, val);
    }
  });
}

module.exports = countStudents;
