const x = 7
const y = 1
const min = 4
const max = 10


console.log( x >= min && x <= max);
// true

console.log(y >= min && y <= max);
// false

console.log( x < min || x >= max);
// false

console.log( !(x === y));
// true

// with && both arguments have to pass
// with || one of arguments have to pass