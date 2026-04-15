const user = {
    firstName: 'Łukasz',
    lastName: 'Nowak',
    birthYear: 1990,
}

const createMessage = function(u){
    const currYear = (new Date()).getFullYear()
    const message = `${u.firstName} ${u.lastName} obchodzi w tym roku ${currYear - u.birthYear} urodziny!`
    return message
}

const message = createMessage(user)

console.log(message);
