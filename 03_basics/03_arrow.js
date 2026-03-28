// node ./03_basics/03_arrow.js

const user = {
    username: "akash",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "shakti"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "akash"
//     console.log(this.username);
    
// }

// chai()

// const chai = function () {
//     let username = "akash"
//     console.log(this.username);
// }


const chai = () => {
    let username = "akash"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "akash"})

console.log(addTwo(45, 45));


// const myArray = [2, 3, 4, 5, 6, 7]

// myArray.forEach()