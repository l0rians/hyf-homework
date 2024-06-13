const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Cannot add empty string.");
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }
  if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log(`${studentName} has been added to the class`);
    return;
  }
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }
  class07Students.push(studentName);
  console.log(`${studentName} has been added to the class`);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("John");
addStudentToClass("Jane");
addStudentToClass("John");
addStudentToClass("Mary");
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Eve");
addStudentToClass("Queen");
addStudentToClass("Albert");
addStudentToClass("Queen");

console.log("Number of students in class:", getNumberOfStudents());
