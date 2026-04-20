const arr = [0, 1, 2, 3]
const [a, b] = arr
console.log(a, b);
// 0 1

let c = 0;
[, , c] = arr
console.log(c);
// 2


const obj = {
    firstName: 'Bartek',
    lastName: 'Nowak'
}

const {lastName} = obj
console.log(lastName);
// Nowak
