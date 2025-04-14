const name  = 'Agnieszka'
const nameObj = new String('Agnieszka')
console.log(name.length, nameObj.length);
// 9 9

const nameUpper = name.toUpperCase()
const nameObjUpper = nameObj.toLocaleUpperCase()
console.log(nameUpper, nameObjUpper);
// AGNIESZKA AGNIESZKA

const price = 5.952
const priceObj = new Number(5.952)
console.log(price.toFixed(2), priceObj.toFixed(2));
// 5.95 5.95
console.log(typeof price, typeof priceObj);
// number object

