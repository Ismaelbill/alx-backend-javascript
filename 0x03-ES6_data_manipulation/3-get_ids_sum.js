#!/usr/bin/node

function getStudentIdsSum(students) {
  const result = students.reduce(
    (acc, currentVal) => acc + currentVal.id,
    0,
  );
  return result;
}
export default getStudentIdsSum;
