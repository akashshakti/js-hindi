const name = "Akash"
const repoCount = 10

// console.log(name + repoCount + " Value")

// morden way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akash')

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

const anotherString = gameName.slice(-6, 2)
console.log(anotherString);
