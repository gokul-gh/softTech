/*************************************************************************************
 *  Name of the Task       : Sum of two numbers                                             *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
// Function expression to calculate the sum of two numbers

//Code Statements

//Variables declaration
let firstNumberId = document.getElementById("firstItem");
let secondNumberId = document.getElementById("secondItem");
let resultValue = document.getElementById("resultId");

let calculateButton = document.getElementById("buttonId");
let resetButton = document.getElementById("resetId");

//Function expression to calculate sum
let sum = function (event) {
  let firstNumber = parseInt(firstNumberId.value);
  let secondNumber = parseInt(secondNumberId.value);

  resultValue.value = firstNumber + secondNumber;
};

//Function expression to clear values
let reset = function (event) {
  firstNumberId.value = "";
  secondNumberId.value = "";
  resultValue.value = "";
};

//Declare event listeners on clicking button
calculateButton.addEventListener("click", sum);
resetButton.addEventListener("click", reset);
