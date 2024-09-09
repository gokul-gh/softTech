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

let celsiusInputId = document.getElementById("firstItem");
let result = document.getElementById("resultId");

let convertButton = document.getElementById("buttonId");
let resetButton = document.getElementById("resetId");

let convert = () => {
  let celsiusInput = parseInt(celsiusInputId.value);
  let farenheit = (9 / 5) * celsiusInput + 32;
  result.value = farenheit;
};

let reset = () => {
  celsiusInputId.value = "";
  result.value = "";
  farenheit = 0;
};

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
