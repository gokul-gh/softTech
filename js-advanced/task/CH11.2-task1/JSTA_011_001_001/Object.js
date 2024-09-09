/*************************************************************************************
 *  Name of the Task       : Student Details(Object Method)                                              *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

//Code Statements
//Input variables declaration
let inputNameId = document.getElementById("nameId");
let markScoredId = document.getElementById("scoreId");
let studentsDetail = document.getElementById("studentId");

//Button variables declaration
let calculateButton = document.getElementById("buttonId");
let resetButton = document.getElementById("resetId");

//Function to calculate grade and display it
let calculateGrade = function (event) {
  let inputName = inputNameId.value;
  let markScored = parseInt(markScoredId.value);
  let grade;

  switch (true) {
    case markScored > 90 && markScored <= 100:
      grade = "A";
      break;

    case markScored > 80 && markScored <= 90:
      grade = "B";
      break;

    case markScored > 70 && markScored <= 80:
      grade = "C";
      break;

    case markScored > 50 && markScored <= 70:
      grade = "D";
      break;

    case markScored >= 40 && markScored <= 50:
      grade = "E";
      break;

    case markScored < 40 && markScored >= 0:
      grade = "F";
      break;

    default:
      alert("Input number is out of range from 0 to 100");
  }

  let studentObject = {
    inputName: inputName,
    markScored: markScored,
    grade: grade,
  };

  if (grade != undefined) {
    studentsDetail.value += `${JSON.stringify(studentObject)}\n`;
  }
};

//Reset function to clear value
let reset = function (event) {
  inputNameId.value = "";
  markScoredId.value = "";
  studentsDetail.value = "";
};

//Declare eventlistener
calculateButton.addEventListener("click", calculateGrade);
resetButton.addEventListener("click", reset);
