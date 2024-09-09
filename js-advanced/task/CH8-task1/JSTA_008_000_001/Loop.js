/*************************************************************************************
 *  Name of the Task       : Sum Of Array Elements                                   *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

//Code Statements

//Variables declaration
let inputElement = document.getElementById("itemId");
let allArrayElementsId = document.getElementById("arrayId");
let arraySumId = document.getElementById("resultId");

let addButtonId = document.getElementById("addId");
let calculateButtonId = document.getElementById("buttonId");
let resetButtonId = document.getElementById("resetId");

let numbersArray = [],
  iteration = 0,
  sum = 0;

//Functions to get input elements and display it
let addElements = function (event) {
  numbersArray[iteration] = parseInt(inputElement.value);
  allArrayElementsId.value += `${numbersArray[iteration]}\n`;
  iteration++;
};

//Function to do sum using for..of loop
let calculate = function (event) {
  sum = 0; 
  for (let position of numbersArray) {
    sum += position;
  }
  arraySumId.value = `${sum}`;
};

//Function to clear values
let resetValues = function (event) {
  inputElement.value = "";
  allArrayElementsId.value = "";
  arraySumId.value = "";
  sum = 0;
  iteration = 0;
  numbersArray = [];
}

addButtonId.addEventListener("click", addElements);
calculateButtonId.addEventListener("click", calculate);
resetButtonId.addEventListener("click", resetValues);