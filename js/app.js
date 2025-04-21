let a = 12;
let b = a;
console.log(b); // 12

b = 14
console.log(a, b); // 14


let objA = {
    num: 12,
}

let objB = objA
console.log(objB.num); // 12

objB.num = 14
console.log(objA.num, objB.num); // 14 14


