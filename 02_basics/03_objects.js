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