// node ./02_basics/04_objects.js

// const tinderUser = new Object  //single term object 
const tinderUser ={}  //non-single term object


tinderUser.id = "123abc"
tinderUser.name = "Saka"
tinderUser.isLoddedIn = false

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

console.log(regularUser.fullname.userfullname.firstname);
