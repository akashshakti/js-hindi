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