/*************************************************************************************
 *  Name of the Task       : Sum Of Array Elements                                   *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
//Find the maximum number in an array using reduce method
//Code Statements

//Variables declaration
let arrayElementId = document.getElementById("itemId");
let arrayDisplayArea = document.getElementById("arrayId");
let maxNumberDisplay = document.getElementById("resultId");

//Button declaration
let addButton = document.getElementById("addId");
let calculateButton = document.getElementById("buttonId");
let resetButton = document.getElementById("resetId");

let numbersArray = [],
  maxNumber;

//Function to find maximum numberS
let findMaxNumber = function (event) {
  arrayDisplayArea.value = "";
  let arrayElement = parseInt(arrayElementId.value);

  numbersArray.push(arrayElement);
  for (iteration of numbersArray) {
    arrayDisplayArea.value += `${iteration} `;
  }

  //Find maximux number in array using reduce method
  maxNumber = numbersArray.reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
  }, numbersArray[0]);
};

let calculateMaxNumber = function (event) {
  maxNumberDisplay.value = maxNumber;
};

//Reset function to clear values
let resetFunction = function (event) {
  numbersArray = [];
  arrayElementId.value = "";
  arrayDisplayArea.value = "";
  maxNumberDisplay.value = "";
};

//Event listeners declarations
addButton.addEventListener("click", findMaxNumber);
calculateButton.addEventListener("click", calculateMaxNumber);
resetButton.addEventListener("click", resetFunction);
