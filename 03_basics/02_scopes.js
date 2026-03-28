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

