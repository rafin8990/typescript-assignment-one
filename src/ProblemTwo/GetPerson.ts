/* type Person = {
    name: string,
    age: number;
}

function getPerson(users: Person[]): object {
    // console.log(users);
    let newUser: Array<object> = []
    users.map(user => {
        if (user.age >= 18) {
            newUser.push(user)
        }
    });
    return newUser
}

const newUser = getPerson([{ name: "Rafin", age: 15 }, { name: "Robin", age: 25 }, { name: "Shohan", age: 27 }])
console.log(newUser); */