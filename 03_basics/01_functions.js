//node ./03_basics/01_functions.js

function sayMyName() {
  console.log("A");
  console.log("K");
  console.log("A");
  console.log("S");
  console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2) {

    let result = number1 + number2
    return result
    // return number1 + number2
    
}
// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, "4")
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(username === undefined){                     //!username kar shakta hu
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("akash"));
// console.log(loginUserMessage());


