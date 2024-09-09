/*************************************************************************************
 *  Name of the Task       : Operators                                               *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

//Code Statements

let firstItemPriceId = document.getElementById("firstItem");
let secondItemPriceId = document.getElementById("secondItem");
let discoundId = document.getElementById("discountPrice");
let result = document.getElementById("resultId");

function calculate() {
  let firstItemPrice = parseInt(firstItemPriceId.value);
  let secondItemPrice = parseInt(secondItemPriceId.value);
  let discount = discoundId.value;

  let totalPrice = firstItemPrice + secondItemPrice;
  let afterDiscountPrice = totalPrice - (totalPrice * discount) / 100;

  result.value = afterDiscountPrice;
}

function reset() {
  firstItemPriceId.value = "";
  secondItemPriceId.value = "";
  discoundId.value = "";
  result.value = "";
}
