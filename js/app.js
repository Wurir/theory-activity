const userA = prompt('Podaj a...')
const userB = prompt('Podaj b...')
const userC = prompt('Podaj c...')

// poniewaz dziala hoisting, to moge uruchomic ponizsze funkcje
const sum = getSum(userA, userB, userC)
const avg = getAverage(sum, 3)
console.log(avg);


function getSum(a, b, c){
    let sum  = parseInt(a)
    sum += parseInt(b)
    sum += parseInt(c)
    return sum
}

function getAverage(sum, count) {
    if(count === 0) {
        return 0
    }
    return sum / count
}