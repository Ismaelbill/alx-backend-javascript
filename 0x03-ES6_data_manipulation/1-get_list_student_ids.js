// #!/usr/bin/node

function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArray = arr.map((val) => val.id);
  return newArray;
}
export default getListStudentIds;
