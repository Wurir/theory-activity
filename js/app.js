const rateFromUsdToPln = 3.80
const rateFromGbpToPln = 5.02
const valueUsd = 223
const valueGbp = 121
let pln

pln = valueUsd * rateFromUsdToPln
console.log('Wartość dolarów to: ', pln);

pln = valueGbp * rateFromGbpToPln
console.log('Wartość funtów to: ', pln);

