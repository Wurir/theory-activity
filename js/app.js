const a = 2;
const n = 3; // przyjmuje, ze tylko liczby dodatnie

let pow = 1;
for(let i=1; i<=n; i++){
    pow *= a
}
console.log(pow); // 8

console.log(Math.pow(a, n)); // 8

