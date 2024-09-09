/*************************************************************************************
 *  Name of the Task       : DOM Manipulation                                        *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *
 *                        Maintenance History                                        *
 *                                                                                   *
 *************************************************************************************/

// Varibales declaration
let inputElementId = document.getElementById("arrayItems");
let displayElements = document.getElementById("displayArray");
let elementAfterRemoved = document.getElementById("orderId");
let count = 0,
  elementArray = [];

//Function declaration to create element list
function addItems() {
  displayElements.value = "";
  let inputElement = inputElementId.value;

  elementArray[count] = inputElement;
  ++count;

  for (let iteration = 0; iteration < count; iteration++) {
    displayElements.value += `${elementArray[iteration]}\n`;
  }
}

//Function to remove element from list
function remove() {
  elementAfterRemoved.value = "";
  --count;
  
  for (let iteration = 0; iteration < count; iteration++) {
    elementAfterRemoved.value += `${elementArray[iteration]}\n`;
  }
}

//Reset function to clear values
function reset() {
  inputElementId.value = "";
  displayElements.value = "";
  elementAfterRemoved.value = "";
  count = 0,
  elementArray = [];
}
