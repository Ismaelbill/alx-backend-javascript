#!/usr/bin/node

function updateStudentGradeByCity(students, city, newGrades) {
  const filteredCity = students
    .filter((val) => val.location === city)
    .map((val) => {
      newGrades
        .filter((value) => value.studentId === val.id)
        .map((insideVal) => val.grade = insideVal.grade);

      if (!val.grade) {
        val.grade = 'N/A';
      }
      return val;
    });
  return filteredCity;
}
export default updateStudentGradeByCity;
