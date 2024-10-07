#!/usr/bin/node

function updateStudentGradeByCity(students, city, newGrades) {
  const filteredCity = students
    .filter((val) => val.location === city)
    .map((val) => {
      newGrades
        .filter((value) => value.studentId === val.id)
        // eslint-disable-next-line no-return-assign
        .map((insideVal) => (val.grade = insideVal.grade)); // eslint-disable-line no-param-reassign

      if (!val.grade) {
        val.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
      return val;
    });
  return filteredCity;
}
export default updateStudentGradeByCity;
