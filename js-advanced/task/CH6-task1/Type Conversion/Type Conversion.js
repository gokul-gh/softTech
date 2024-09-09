/*************************************************************************************
 *  Name of the Task       : Type Conversion                                         *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
//  *************************************************************************************/
//    Create an object named bookDetails with the following properties: BOOK NAME,AUTHOR NAME,PUBLISHED YEAR,PRICE.
//  1.Use the JSON.stringify method to convert the bookDetails object into a JSON-formatted string.

//Code Statements

//Variable declaration
let displayResultId = document.getElementById("displayResult");

//Creating a bookDetails object
let bookDetails = {
  bookName: "My work",
  authorName: "Mr. Rajan",
  publishedYear: 2024,
  price: "20,000 Rs",
};

let objectToString = JSON.stringify(bookDetails);
displayResultId.innerHTML = objectToString;