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

