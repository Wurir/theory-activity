const a = 12
const b = 55

const info = a > b ? 'A większe' : 'B większe'
console.log(info);

const diff = a > b ? a - b : b-a
console.log(diff);

const numsAreEven1 = (a % 2 === 0) && (b % 2 === 0) ? 'yes' : 'no'
const numsAreEven2 = !(a % 2) && !(b & 2) ? 'yes': 'no'

console.log(numsAreEven1, numsAreEven2);
// no no