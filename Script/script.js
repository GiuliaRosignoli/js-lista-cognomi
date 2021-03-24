   // TASK

/**  Ask the user what's their surname.
 *   Insert it into an array together with other surnames.
 *   Once you've arranged the list in alphabetical order, print it.
 *   Write down the correct position (1,2,3,etc.)
 */


var lastName = prompt("What's your surname?").toLowerCase();

var lastNamesList = ["bianchi", "neri","verdi", "rossi", "gialli"];

// console.log(lastNamesList);

lastNamesList.push(lastName);
lastNamesList.sort();
console.log(lastNamesList);