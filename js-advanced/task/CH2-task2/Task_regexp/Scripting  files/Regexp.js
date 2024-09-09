/*            *************************************************************
 *  Name of the challenge  :                                  *
 *                                                            *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :                Ticket No:        *
 ************************************************************* */

// Declaration

//Input declaration
let nameId = document.getElementById("stringId");
let rollNoId = document.getElementById("rollId");
let courseNameId = document.getElementById("courseId");
let result = document.getElementById("resultId");

//Code Statements
function inputValidation() {
  let name = nameId.value;
  let rollNo = rollNoId.value;
  let courseName = courseNameId.value;

  let namePattern = /^[a-zA-z\s]+$/;
  let rollNoPattern = /^[0-9]+$/;

  if (namePattern.test(name) && rollNoPattern.test(rollNo)) {
    result.value += `${name}\n`;
    result.value += `${rollNo}\n`;
    result.value += `${courseName}\n`;
  }
}

//Reset function to clear all values
function reset() {
  nameId.value = "";
  rollNoId.value = "";
  courseNameId.value = "";
  result.value = "";
}

// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();
