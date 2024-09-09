/*************************************************************************************
 *  Name of the challenge  : Variables (Simple Counter App)                           *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

//Code Statements
let outputResult = document.getElementById("output");

let variable1 = 10; //Defined using let
var variable2 = 20; //Defined using var
const variable3 = 30; //Defined using const

function counter() {
  let variable1 = 100;
  var variable2 = 200;
  const variable3 = 300;

  outputResult.innerHTML += `Inside the loop: ${variable1}  ${variable2} ${variable3} <br>`;
}

counter();

outputResult.innerHTML += `Outside the loop: ${variable1}  ${variable2} ${variable3}`;





//Date and Time declaration
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();
