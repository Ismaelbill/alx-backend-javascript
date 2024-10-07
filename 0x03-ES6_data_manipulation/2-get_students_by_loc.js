#!/usr/bin/node

function getStudentsByLocation(students, city) {
  const result = students.filter((val) => val.location === city);
  return result;
}
export default getStudentsByLocation;
