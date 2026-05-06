const promisesOne = new Promise(function (resolve, reject) {
    //  Do any async task
    //  DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async Task Is Compelete');
        resolve()
    }, 1000)
})

promisesOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task2 Is Compelete');
        resolve()
    }, 1000)

}).then(function () {
    console.log("Promise2 Compelete");
})

const promisesThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Ha JI", email: "haji@example.in" })
    }, 1000)
})

promisesThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Akash", password: "123" })
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(() => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("It's compelete")
)


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)