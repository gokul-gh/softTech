/*************************************************************************************
 *  Name of the Task       : Data Types(Object Creation)                             *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
//Create an Object with Book Details
let output = document.getElementById("outputId");

let bookDetail = {
  bookName: "story of book",
  bookCost: "100Rs",
  bookId: 11442,
  bookAuthor: "Rajan",
};

output.innerHTML = `Book Name: ${bookDetail.bookName} <br>
                    Cost: ${bookDetail.bookCost} <br>
                    Registration Number: ${bookDetail.bookId} <br>
                    Author: ${bookDetail.bookAuthor}`;

//Date and Time declaration
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();
//Code Statements
