================================================
FILE: README.md
================================================
# js-hindi
js code by Akash



================================================
FILE: 01_basics/01_variables.js
================================================
const accountId = 144553
let accountEmail = "akash@gmmail.com"
var accountPassword = "123456"
accountCity = "Ayodhya"
let accountState

// accountId = 2

accountEmail = "as@gmail.co"
accountPassword ="88888"
accountCity = "bengaluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


================================================
FILE: 01_basics/02_dataTypes.js
================================================
"use strict"; // treat all JS code as newer version

//alert( 3 + 3) // we are using node.js, not browser

console.log(3 + 3)

let name = "Akash"
let age = 18
let isLoggedIn = false

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique



// object

console.log(typeof age);
console.log(typeof null); //object


================================================
FILE: 01_basics/03_conversionOperation.js
================================================
let score = null

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

let ak = true

let valueInNumbe = Number(ak)
// console.log(typeof (valueInNumbe));
// console.log(valueInNumbe);

// "33" => 33
// "33aa" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Akash" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// ************************* Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);
// console.log(4**4);

let str1 = "hello"
let str2 = " Akash"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( 3 + 4 * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
// console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


================================================
FILE: 01_basics/04_comparison.js
================================================
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


//  ***************Avoid this type comparison & conversion************

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined > 0);

//   ===

console.log("2" === 2);


================================================
FILE: 01_basics/05_strings.js
================================================
const name = "Akash"
const repoCount = 10

// console.log(name + repoCount + " Value")

// morden way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akash')
const gameName1 = new String('Akash-av-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// console.log(gameName.indexOf('l'));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-5, 2)
console.log(anotherString);


// node 01_basics/05_strings.js

const newStringOne = "      Akash      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akash.com/akash%20verma"

console.log( url.replace('%20', '-'));

console.log(url.includes('akash'));
console.log(url.includes('asdjak'));

console.log(gameName1.split('-'));



================================================
FILE: 01_basics/06_nums_and_math.js
================================================
const score = 400
// console.log(score);


const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ********************Maths***************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4.9, 4, 0.4, 5));
// console.log(Math.max(4.9, 4, 0.4, 5));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.random() * (max - min +1))
console.log(Math.floor(Math.random() * (max - min +1)) + min)

// node 01_basics/06_nums_and_math.js



================================================
FILE: 01_basics/07_datesinJs.js
================================================
// node 01_basics/07_datesinJs.js

// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);


// let myCreatedDate = new Date(2026, 1, 19)
// let myCreatedDate = new Date(2026, 1, 19, 5, 3)
// let myCreatedDate = new Date("2026-1-19")
let myCreatedDate = new Date("02-19-2026")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "IST"
}));



================================================
FILE: 01_basics/datatypes-summary.js
================================================
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



================================================
FILE: 01_basics/test.js
================================================
console.log("Akash")


================================================
FILE: 02_basics/01_arrays.js
================================================
// node 02_basics/01_arrays.js

// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0]);

// Array methods 

// myArr.push(6)
// myArr.push(6)
// myArr.push(68)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



================================================
FILE: 02_basics/02_arrays.js
================================================
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//  best then concat that name is split

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array .flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Akash"));
// console.log(Array.from("Akash"));
// console.log(Array.from({name: "Akash"})); // interesting case 

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));
console.log(Array.isArray(score1, score2, score3));
console.log(Array.from({score1, score2, score3}));



================================================
FILE: 02_basics/03_objects.js
================================================
// singleton
// Object.create


// object literals

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Akash",
    "full name" : "Akash ji",
    [mySym]: "mykey1",
    age: 18,
    location: "Ayodhya",
    email: "akash@akash.com",
    isLoggeIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "akash@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "akash@chatti.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// ham sab jagha tar . ka use karta hai object ki value ko access kaliya but kuch special cases ma [] ka use karta hai 


================================================
FILE: 02_basics/04_objects.js
================================================
// node ./02_basics/04_objects.js

// const tinderUser = new Object  //single term object 
const tinderUser ={}  //non-single term object


tinderUser.id = "123abc"
tinderUser.name = "Saka"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akash",
            lastname: "verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "akash"
}



// const {courseInstructor} = course
const {courseInstructor: instuctor} = course

// console.log(courseInstructor);
console.log(instuctor);

// exampile 
// const navbar = ({company}) => {

// }

// navbar(company = "akash")

// {
//     "name": "akash",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


================================================
FILE: 03_basics/01_functions.js
================================================
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


// rust oprater

function calculateCartPrice(val1, val2, ...num1) {
   return num1 
}

// console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "akash",
    price: 190
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price of course is ${anyobject.price}`);
    
}

// handleObject(user)

// handleObject({
//     username: "akash",
//     price: 4999
// })

const myNewArray = [200, 400, 500, 621]

function returnSecoundValue(getArray) {
    return getArray[1]
}

console.log(returnSecoundValue(myNewArray));




================================================
FILE: 03_basics/02_scopes.js
================================================
// node ./03_basics/02_scopes.js

// var c = 300 //Global scopes
let a = 300
if (true) {
  let a = 10
  const b = 20
  //   var c = 30
  // console.log("INNER: ", a);
  

} //block scopes


// console.log(a);
// console.log(b);
// console.log(c);



function one() {
  const username = "akash"

  function two() {
    const website = "youtube"
    console.log(username);
    
  }
  // console.log(website);
  
  two()

}

// one()

if (true) {
  const username = "akash"
  if (username === "akash") {
    const website = " youtube"
    // console.log(username + website);
    
  }
  // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++


function addone(num) {
  return num + 1
}
addone(4)

// +++++++++++++++++
// const addtwo = function (num) {
//   return num + 2
// }

// addtwo(4)

// imp
addtwo(4)

const addtwo = function (num) {
  return num + 2
}




================================================
FILE: 03_basics/03_arrow.js
================================================
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


================================================
FILE: 03_basics/04_iife.js
================================================
// Immediately Invoked Function Expression (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();


//  ++++++++++ IIFE ++++++++
//    ()()  symbol        &  ; it is importent
//  global scope sa hona wali palution ka sloution

(  (name) => {
    // unname IIFE 
    console.log(`DB IS CONNECTED TOW ${name}`);
    
})('akash');




================================================
FILE: 04_control_flow/one.js
================================================
// if

// if (true) {
//     console.log("Akash");
// }
// if (false) {
//     console.log("Akashji");
// }

//  <, >, <=, >=, ==, !=, ===

const temperature = 41
// if (temperature < 50) {
//     console.log("temperature is less then 50");
    
// }
// else{
//     console.log("temperature is greater then 50");
// }

const score = 200

// if (score > 100 ) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// // if (balance > 500) console.log("text"), console.log("text2");

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// }else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}


================================================
FILE: 04_control_flow/switch.js
================================================
// switch 

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("Default case match");
        break;
}

const month1 = "march"

switch (month1) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
    case "june":
        console.log("June");
        break;

    default:
        console.log("Default case match");
        break;
}


================================================
FILE: 04_control_flow/truthy.js
================================================
const userEmail = "a@akash.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }




// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// const userEmail1 = []

// if (userEmail1.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20



console.log(val1);


// Terniary Operator 

// condition ? true : fasle

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


================================================
FILE: 05_iterations/eight.js
================================================
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 3);

const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "dsa course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 2099
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);



================================================
FILE: 05_iterations/five.js
================================================
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(  function (item) {
//     console.log(item);

// } )

// coding.forEach( (item) => {
//     console.log(item);

// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});




================================================
FILE: 05_iterations/four.js
================================================
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "js", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);   
}


================================================
FILE: 05_iterations/one.js
================================================
// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  // if (element == 5) {
  //     console.log("5 is best number");

  // }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);

  for (let j = 0; j <= 10; j++) {
    const element = j;
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    // break;
    continue;
  }
  console.log(`Value of i is ${index}`);
}



================================================
FILE: 05_iterations/seven.js
================================================
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num + 10)

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter( (num) => num >= 40)
  ; // it's calling chain

console.log(newNums);



================================================
FILE: 05_iterations/six.js
================================================
// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num)=> {
//    if (num > 4) {
//      newNums.push(num)
//    }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')
const userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'})

console.log(userBooks);



================================================
FILE: 05_iterations/three.js
================================================
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  // console.log(greet);
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value ] of map) {
    // console.log(key, ':-', value);   
}

const myObject = {
    'game1': "NFS",
    'game2': "FF",
    'game3': "PUBG"
}

// for (const [key, value ] of myObject) {
//     console.log(key, ':-', value);
// }

// Ya nahi ho sakta 


================================================
FILE: 05_iterations/two.js
================================================
let index = 0

while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index +2;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);


================================================
FILE: 06_dom/four.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akash | DOM</title>
</head>
<body style="background-color: black; color: white;">
    <ul class="language">
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
    </ul>
</body>
<script>
    function addLanguage(langName) {
        // const ul = document.querySelector('.language');
        const li = document.createElement('li');
        // li.textContent = langName;
        // ul.appendChild(li);
        li.innerHTML = `${langName}`;
        document.querySelector('.language').appendChild(li);
    }
    addLanguage('C++');
    addLanguage('C#');

    function addOptiLanguage(langName) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName));
        document.querySelector('.language').appendChild(li);
    }
    addOptiLanguage('Go');

    // Edit 
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    // secondLang.innerHTML = "Mojo";
    const newli = document.createElement('li');
    newli.textContent = "Mojo";
    secondLang.replaceWith(newli);

    // edit
    const thirdLang = document.querySelector("li:nth-child(3)");
    thirdLang.outerHTML = "<li>Rust</li>";
    
    // remove & delete
    const lastLang = document.querySelector("li:last-child");
    lastLang.remove();


</script>
</html>


================================================
FILE: 06_dom/one.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dom Learning</title>
    <style>
        *{
            background-color: black;
            color: white;
        }
    </style>
</head>
<body>
    <div class="bg-black">
        <h1 id="title" class="heading">DOM learning by self <span style="display: none;">test text</span> </h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>

        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>
</html>


================================================
FILE: 06_dom/three.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akash</title>
</head>
<body style="background-color: black; color: white;">
    
</body>
<script>
    const div = document.createElement('div');
    
    console.log(div);
    div.className = "main"
    div.id = "myId"
    div.setAttribute('title', "Akash's div");
    div.style.color = 'red';
    div.style.padding = '10px';
    // div.innerHTML = 'Hello, World!';
    // document.body.appendChild(div);
    const addText = document.createTextNode('Hello, World!');
    div.appendChild(addText);
    document.body.appendChild(div);

</script>
</html>


================================================
FILE: 06_dom/two.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | Learning</title>
</head>
<body style="background-color: black; color: white;">
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent');
    // console.log(parent);
    // console.log(parent.children[1].innerHTML);
    // console.log(parent.children[2].innerHTML);

    for (let i = 0; i < parent.children.length; i++) {
        const element = parent.children[i];
        // console.log(element.innerHTML);
    }

    parent.children[0].style.color = 'blue';
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day');
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);
    
    console.log("NODES: ", parent.childNodes);
    

</script>
</html>


================================================
FILE: 07_projects/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@study2exprement"
        >Youtube channel</a
      >
    </nav>
    <main>
      <h1>Chai aur code</h1>
      <div class="projects">
        <a class="project-link" href="./1-colorChanger/index.html"
          >Project 1 - color Changer 🔥</a
        >
        <a class="project-link" href="./2-BMICalculator/index.html"
          >Project 2 - BMI Generator ☕️</a
        >
        <a class="project-link" href="./3-DigitalClock/index.html"
          >Project 3 - Digital clock 😎</a
        >
        <a class="project-link" href="./4-GuessTheNumber/index.html"
          >Project 4 - Guess the number 🤨</a
        >
        <a class="project-link" href="./5-keyboard/index.html"
          >Project 5 - Keyboard check 👻</a
        >
        <a class="project-link" href="./6-unlimitedColors/index.html"
          >Project 6 - Unlimited Colors 🧠
        </a>
        <a class="project-link" href="./7-scroll/index.html"
          >Project 7 - Scroll like NextJS 👀</a
        >
        <a class="project-link" href="./8-typer/index.html"
          >Project 8 - Your typer library 📚
        </a>
        <a class="project-link" href="./9-mouseCircle/index.html"
          >Project 9 - Mouse Circle 📚
        </a>
        <a class="project-link" href="./10-emoji/index.html"
          >Project 10 - Emoji 🫥
        </a>
        <a class="project-link" href="./11-textEditor/index.html"
          >Project 11 - Text Editor ✍️
        </a>
        <a class="project-link" href="./12-randomImage/index.html"
          >Project 12 - Random Image 🌠
        </a>
        <a class="project-link" href="./13-jokes/index.html"
          >Project 13 - Jokes 😂
        </a>
        <a class="project-link" href="./14-cats/index.html"
          >Project 14 - cats 🐈
        </a>
        <a class="project-link" href="./15-crudDom/index.html"
          >Project 15 - DOM Crud 📌
        </a>
        <a class="project-link" href="./16-debounce/index.html"
          >Project 16 - Debouncing 🏀
        </a>
      </div>
    </main>
  </body>
</html>



================================================
FILE: 07_projects/projectsset1.md
================================================
# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```


## Project 2

``` javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```



## Project 3

``` javascript
const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
    , 1000);



```


## Project 4

``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1) {
        alert("Please enter a number greater than 0.");
    } else if (guess > 100) {
        alert("Please enter a number less than 101.");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `<span>${guess}  </span>`;
    numGuess++;
    remaining.innerHTML = `<span>You have ${12 - numGuess} guesses left</span>`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    // submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();


}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `<span>You have ${12 - numGuess} guesses left</span>`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });

}




```

## Project 5 

``` javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'>
     <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})

```


## Project 6

``` javascript
// generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
    if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);

```


================================================
FILE: 07_projects/script.js
================================================
console.log("Ha Ji");


================================================
FILE: 07_projects/styles.css
================================================
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: black;
  background-color: white;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: solid 1px #aaa;
  background-color: #eee;
}

nav a {
  display: inline-block;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: solid 1px rgb(22, 22, 22);
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
}

nav a[aria-current='page'] {
  color: #000;
  background-color: #d4d4d4;
}

main {
  padding: 1rem;
}

h1 {
  font-weight: bold;
  font-size: 1.5rem;
}

.projects {
  display: flex;
  flex-direction: column;
}

.project-link {
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;
  margin-top: 5px;
}



================================================
FILE: 07_projects/1-colorChanger/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@study2exprement"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="script.js"></script>
  </body>
</html>



================================================
FILE: 07_projects/1-colorChanger/script.js
================================================
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


================================================
FILE: 07_projects/1-colorChanger/style.css
================================================
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}



================================================
FILE: 07_projects/2-BMICalculator/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@study2exprement"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="script.js"></script>
</html>



================================================
FILE: 07_projects/2-BMICalculator/script.js
================================================
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }


    if (bmi < 18.6) {
        results.innerHTML += `<span> You are underweight</span>`;
    }
    else if (bmi >= 18.7 && bmi < 24.9) {
        results.innerHTML += `<span> You are normal weight</span>`;
    }
    else if (bmi >= 25 && bmi < 30) {
        results.innerHTML += `<span> You are overweight</span>`;
    }
    else {
        results.innerHTML += `<span> You are obese</span>`;
    }


});




================================================
FILE: 07_projects/2-BMICalculator/style.css
================================================
.container {
  width: 575px;
  height: 825px;

  background-color: #4a4a4a;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}



================================================
FILE: 07_projects/3-DigitalClock/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>



================================================
FILE: 07_projects/3-DigitalClock/script.js
================================================
const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
    , 1000);




================================================
FILE: 07_projects/4-GuessTheNumber/index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>


================================================
FILE: 07_projects/4-GuessTheNumber/script.js
================================================
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1) {
        alert("Please enter a number greater than 0.");
    } else if (guess > 100) {
        alert("Please enter a number less than 101.");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `<span>${guess}  </span>`;
    numGuess++;
    remaining.innerHTML = `<span>You have ${12 - numGuess} guesses left</span>`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    // submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();


}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `<span>You have ${12 - numGuess} guesses left</span>`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });

}





================================================
FILE: 07_projects/4-GuessTheNumber/style.css
================================================
html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}



================================================
FILE: 07_projects/5-keyboard/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>



================================================
FILE: 07_projects/5-keyboard/script.js
================================================
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'>
     <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})


================================================
FILE: 07_projects/6-unlimitedColors/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="script.js"></script>
  </body>
</html>



================================================
FILE: 07_projects/6-unlimitedColors/script.js
================================================
// generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
    if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};



document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);




================================================
FILE: 08_events/eventbasics.js
================================================
console.log("Get Start Events in JS");



================================================
FILE: 08_events/one.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Html Events</title>
  </head>
  <body style="background-color: #414141; color: aliceblue">
    <h2>Amazing image</h2>
    <div>
      <ul id="images">
        <li>
          <img
            width="200px"
            id="photoshop"
            src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="photoshop"
          />
        </li>
        <li>
          <img
            width="200px"
            id="japan"
            src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </li>
        <li>
          <img
            width="200px"
            id="river"
            src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </li>
        <li>
          <img
            width="200px"
            id="owl"
            src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </li>
        <li>
          <img
            width="200px"
            id="prayer"
            src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </li>
        <li>
          <a style="color: aliceblue" href="https://google.com" id="google"
            >Google</a
          >
        </li>
      </ul>
    </div>
  </body>
  <script>
    //  JS ma events ko handle karne ke liye hum event listeners ka use karte hain. Event listener ek function hota hai jo kisi specific event ke hone par execute hota hai. Hum event listeners ko HTML elements par attach kar sakte hain, jaise ki buttons, images, links, etc.

    //  JS ma events run hona ek asynchronous process hota hai

    // document.getElementById('owl').onclick = function() {
    //     alert('You clicked on the owl image!');
    // }
    // attachEventListener()
    // jQuery - on()

    // document.getElementById("owl").addEventListener(
    //   "click",
    //   function () {
    //     alert("You clicked on the owl image!");
    //   },
    //   false,
    // );
    // 
    
    // type, timeStamp, defaultPrevented, target, currentTarget, toElement, eventPhase, srcElement, currentTarget, clientX, clientY, pageX, pageY, screenX, screenY, altKey, ctrlKey, shiftKey, metaKey, button, keyCode


    // document.getElementById("images").addEventListener("click", function (e){
    //     console.log("clicked on the image");
    //     }, false);

    // document.getElementById("owl").addEventListener("click", function (e){
    //     console.log("clicked on the owl image");
    //     e.stopPropagation();
    //     }, false);


    // document.getElementById("google").addEventListener("click", function (e){
    //     console.log("clicked on the google link");
    //     e.preventDefault();
    //     e.stopPropagation();
    //     }, false);



    document.querySelector("#images").addEventListener("click", function (e) {
        console.log(e.target.tagName);
        if(e.target.tagName === "IMG") {
            console.log(e.target.id);
            
            let removeIt = e.target.parentNode;
        removeIt.remove();

        } 

       

        // removeIt.parentNode.removeChild(removeIt);

    }, false);

  </script>
</html>



================================================
FILE: 08_events/three.html
================================================
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello! Akash JI</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    // const sayDate = function(str){
    //     console.log(str, Date.now());  
    // }


    // const intervalId = setInterval(sayDate, 1000, "hi")

    // clearInterval(intervalId)

    let intervalId;
const startChanging = function(){
    if (!intervalId) {
    intervalId = setInterval(change, 1000);
    }
    function change(){
      console.log("Akash", Date.now());
    }
};
const stopChanging = function(){
    clearInterval(intervalId);
    intervalId = null;
};



document.querySelector("#start").addEventListener('click', startChanging);

document.querySelector("#stop").addEventListener('click', stopChanging);

</script>
</html>


================================================
FILE: 08_events/two.html
================================================
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello! Akash JI</h1>
    <button id="stop">Stop</button>
</body>
<script>
    const sayAkash = function () {
        console.log("Akash");
    }
    const bestAkash = function(){
        document.querySelector('h1').innerHTML = "Akash JI Best"
    }

    // (sayAkash, 2000)
    const changeMe = setTimeout(bestAkash, 2000)

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)
        console.log("STOPPED");
        
    })




</script>

</html>


================================================
FILE: 09_advance_one/ApiRequest.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: black; color: white;">
    <h1>Ha JI </h1>
</body>
<script>
    const requestUrl = 'https://api.github.com/users/akashshakti'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(typeof data);
            
            console.log(data.followers);
            
        }
    }
    
    
    xhr.send()
</script>
</html>


================================================
FILE: 09_advance_one/promises.js
================================================
const promisesOne = new Promise(function (resolve, reject) {
    //  Do any async task
    //  DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async Task Is Compelete');
        resolve()
    }, 1000)
})

promisesOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task2 Is Compelete');
        resolve()
    }, 1000)

}).then(function () {
    console.log("Promise2 Compelete");
})

const promisesThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Ha JI", email: "haji@example.in" })
    }, 1000)
})

promisesThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Akash", password: "123" })
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(() => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("It's compelete")
)


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)


================================================
FILE: 10_classes_and_oop/bind.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:3000"

            // requirment
            document.querySelector('button').addEventListener('click', this.handleClick.bind(this))

        }
        handleClick(){
            console.log("Button Clicked");
            console.log(this.server);
        }
    }

    const app = new React()
</script>
</html>


================================================
FILE: 10_classes_and_oop/call.js
================================================
function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function creatUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new creatUser("chai", "chai@fb.com", "123")
console.log(chai);



================================================
FILE: 10_classes_and_oop/getter_setter.js
================================================
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const akash = new User ("h@.ai", "abc")
console.log(akash.password);
console.log(akash.email);



================================================
FILE: 10_classes_and_oop/inheritance.js
================================================
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email ;
        this.password = password ;
    }

    addCourse(){
        console.log(`A new courses by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "gc@.com", "123")

chai.addCourse()

const tea = new User("tea")

tea.logMe()

console.log(chai instanceof Teacher);



================================================
FILE: 10_classes_and_oop/mathpi.js
================================================
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }


}


================================================
FILE: 10_classes_and_oop/myClasses.js
================================================
// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


================================================
FILE: 10_classes_and_oop/notes.md
================================================
# javascript and classes

## OOP 

## Object
- collection of properties and methods 
- toLowerCase

## why use OOP

## Parts of OOP
Object literal

- Constructor function
- Protypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance 
Polymorphism


================================================
FILE: 10_classes_and_oop/object.js
================================================
function multipleBy5(num){
    return num*5
}

// multipleBy5(5)
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


================================================
FILE: 10_classes_and_oop/object_get_set.js
================================================
const User = {
    _email: 'h@.com',
    _password: 'abc',


    get email(){return this._email.toUpperCase()},
    set email(value){this._email = value},
}

const akash = Object.create(User)
console.log(akash.email);


================================================
FILE: 10_classes_and_oop/object_note.md
================================================
# Object

``` javascript
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
```


================================================
FILE: 10_classes_and_oop/oop.js
================================================
const user ={
    username: "Akash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount ;
    this.isLoggedIn = isLoggedIn ;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Akash", 12, true)
const userTwo = new User("Akash", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);



================================================
FILE: 10_classes_and_oop/properties_get_set.js
================================================
function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        },
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        },
    })

}

const akash = new User ("h@.ai", "abc")
console.log(akash.password);
console.log(akash.email);


================================================
FILE: 10_classes_and_oop/Prototype.js
================================================
// let myName = "Akash      "
// let myCh = "Ha JI      "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.akash = function(){
    console.log(`akash is present in all objects`);
    
}
Array.prototype.heyAkash = function(){
    console.log(`akash says hello`);
    
}

// heroPower.akash()

// myHeros.akash()
// myHeros.heyAkash()
// heroPower.heyAkash()

// inheritance

const User = {
    name: "Akash",
    email: "akash@akash.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User

// mordan syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"akash".trueLength()
"akashji".trueLength()


================================================
FILE: 10_classes_and_oop/staticprop.js
================================================
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const akash = new User("akash")
// console.log(akash.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mahtT = new Teacher("Akash", "a@.com")
// mahtT.logMe();
console.log(mahtT.createId());




================================================
FILE: 11_fun_with_js/closure.html
================================================

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clouser</title>
</head>

<body style="background-color: #313131;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>
<script>
    // function init() {
    //     let name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     displayName();
    // }
    // init();

    // function outer(){
    //     let username = "akash"
    //     function inner(){
    //         let secret = "my123"
    //         console.log(username);
    //     }

    //     function innerTow(){
    //         console.log(username);
    //         // console.log(secret);

    //     }
    //     inner()
    //     innerTow()
    // }
    // outer();
    // console.log("TOO OUTER", username);




    // function makeFunc() {
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    //     // pura lesical scope send hoga
    // }

    // const myFunc = makeFunc();
    // myFunc();


</script>

<script>
    // document.getElementById("orange").onclick = function(){
    //     document.body.style.backgroundColor = 'orange'
    // }
    // document.getElementById("green").onclick = function(){
    //     document.body.style.backgroundColor = 'green'
    // }

    function clickHandler(color) {
        // document.body.style.backgroundColor = `${color}`

        return function () {
            document.body.style.backgroundColor = `${color}`
        }
    }

    document.getElementById('orange').onclick = clickHandler("orange")
    document.getElementById('green').onclick = clickHandler("green")



</script>

</html>



================================================
FILE: 12_fun_js/index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun-With-JS</title>
</head>
<body style="background-color: black; color: white;">

    <h1 class="akash" id="h1">Akash JI</h1>
    <button id="akash">Button</button>
</body>
<script>
    document.getElementById('button');

    const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
    if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
    }
};

    document.querySelector("#akash").addEventListener('click', startChangingColor);
</script>
</html>


================================================
FILE: 12_fun_js/test.js
================================================
const myArr = []
%DebugPrint(myArr)


================================================
FILE: .devcontainer/devcontainer.json
================================================
{
	"image": "mcr.microsoft.com/devcontainers/universal:2",
	"features": {
		"ghcr.io/devcontainers-extra/features/node-asdf:0": {}
	}
}

