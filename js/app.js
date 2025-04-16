function isEven(num) {
    if(num % 2 === 0) {
        return true
    }
    return false
}

function showEvenNumbers(start, stop) {
    for(let i=start; i<stop; i++){
        if(isEven(i)){
            console.log(i + ' jest parzysta!');  
        }
    }
}

showEvenNumbers(1, 10)