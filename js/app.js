const fn = function getUserInput(messageForUser){
    const userInput = prompt(messageForUser)
    return userInput
}

const inputFromUser = fn('Ile masz lat?')
console.log(inputFromUser);
