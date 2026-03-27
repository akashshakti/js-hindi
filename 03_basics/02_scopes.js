// node ./03_basics/02_scopes.js

// var c = 300 //Global scopes
let a = 300
if (true) {
  let a = 10
  const b = 20
  //   var c = 30
  console.log("INNER: ", a);
  

} //block scopes

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
// console.log(b);
// console.log(c);

