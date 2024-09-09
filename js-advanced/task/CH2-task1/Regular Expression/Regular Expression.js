/*************************************************************************************
 *  Name of the challenge  : Date Validator (Regular Expression)                     *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

//Code Statements

let dateInputId = document.getElementById("dateId");
let result = document.getElementById("resultId");

function dateValidator() {
  let dateInput = dateInputId.value;
  const datePattern = /^\d{4}-\d{2}-\d{2}/;

  if (datePattern.test(dateInput)) {
    result.value = "correct format";
  }
  else {
    result.value = "wrong format";
  }
}

function reset() {
  dateInputId.value = "";
  result.value = "";
}