let counter = 1

const showCounter = function() {
    console.log(counter);
    counter++
}

console.log('before setInterval()');
setInterval(showCounter, 1000)
console.log('after setInterval()');
