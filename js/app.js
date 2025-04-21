const user = {
    firstName: 'Alicja',
    lastName: 'Nowak',
    age: 24,
}

console.log(user.firstName, user['firstName']); // Alicja Alicja

const propName = 'firstName'
console.log(user[propName]); // Alicja

