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
