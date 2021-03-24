   // TASK

/**  Ask the user what's their surname.
 *   Insert it into an array together with other surnames.
 *   Once you've arranged the list in alphabetical order, print it.
 *   Write down their correct element index position ( >>>> index starting from 1 )
 */



var lastName = prompt("What's your surname?").toLowerCase();

var lastNamesList = ["bianchi", "neri","verdi", "rossi", "gialli"];

// console.log(lastNamesList);

lastNamesList.push(lastName);
lastNamesList.sort();
//console.log(lastNamesList);


// 2nd part - Write down the correct index position

var indexPosition = lastNamesList.indexOf(lastName);
// console.log(indexPosition + 1);  -----> got the user's last name index


// ----- /

for(var i = 0; i < lastNamesList.length; i++) {
    console.log(i + 1 + " " +  lastNamesList[i]);
}  // ---> got all the items'position

// ---- /



// Print data into HTML

document.getElementById("surnames-list").innerHTML += "<li>" + (i + 1 + " " +  lastNamesList[i]) + "</li>";