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


// 2nd part Write down the correct index position


function array_move(lastNamesList, [0], [1]) {
    if([1] >= lastNamesList.length) {
        var k = [1] - lastNamesList.length + 1;

        while (k--) {
            lastNamesList.push(undefined);
        }
    }
    lastNamesList.splice([1], 0, lastNamesList([0], 1)[0];
    return lastNamesList;
}



/* function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

// returns [2, 1, 3]
console.log(array_move([1, 2, 3], 0, 1));  */