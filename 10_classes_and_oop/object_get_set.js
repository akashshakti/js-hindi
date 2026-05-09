const User = {
    _email: 'h@.com',
    _password: 'abc',


    get email(){return this._email.toUpperCase()},
    set email(value){this._email = value},
}

const akash = Object.create(User)
console.log(akash.email);