const userAge = prompt('Ile masz lat?', 0)

const userAgeInt = parseInt(userAge)

const isAdult = userAgeInt >= 18

if(!isAdult) {

    const leftAge = 18 - userAge

    alert('Do pełnoletności brakuję Ci: ' + leftAge)
}