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
