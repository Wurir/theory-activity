let myVar = null
let myObj = {}

console.log(typeof myVar, typeof myObj);
// object object

console.log(myVar === null, myObj === null);
// true false

console.log(typeof myVar === 'object', typeof myObj === 'object');
// true true

if(typeof myVar === 'object') {
    myVar.prop = 'value'
}
// cannot set property 'prop' of null