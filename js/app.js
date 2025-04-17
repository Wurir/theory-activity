function getUserInput(messageForUser){
    const userInput = prompt(messageForUser)
    return userInput
}

const fn = getUserInput

const inputFromUser = fn('Ile masz lat?')
console.log(inputFromUser);
