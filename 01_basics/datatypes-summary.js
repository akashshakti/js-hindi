// Primitive
// Call by Value (send the copy of org. value)

//  7 Types: String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//  ************Symbol *************

const id = Symbol('123')
const id1 = Symbol('123')

console.log(id === id1);


//  **************BigInt************

// const bigNumber = 3456255635595385n



// Reference (Non-primitive)

// Array, Objects, Functions

// ***********Array********
const heros = ["shaktiman", "naagraj", "doga"]
// ************Object************
let myobj = {
    name: "Akash",
    age: 20,
}
// **************Function*********
const myFunction = function(){
    console.log("Ha Ji");   
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof isLoggedIn);
console.log(typeof score);
console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++

//  Use of memory(Stack, Heap)
//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "study2exprement"
let anothername = myYoutubename
anothername = "Akash"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTow = userOne

userTow.email = "akash@google.com"

console.log(userOne.email);
console.log(userTow.email);
