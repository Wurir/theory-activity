let counter = 1
let idInterval

const showCounter = function() {
    console.log(counter);
    counter++
    if(counter > 5) {
        clearInterval(idInterval)
    }
}


idInterval = setInterval(showCounter, 1000)