const arr = [0, 1, 2, 3]
const [a, b] = arr
console.log(a, b);
// 0 1

let c = 0;
[, , c] = arr
console.log(c);
// 2

const fn1 = function([a , , c]){
    console.log(a, c)
}

const fn2 = ([a , , c])=>{
    console.log(a, c)
}

fn1(arr) //0 2
fn2(arr) //0 2

const obj = {
    firstName: 'Bartek',
    lastName: 'Nowak'
}

const {lastName} = obj
console.log(lastName);
// Nowak

