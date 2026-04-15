const num = 1
const text1 = `string with value from num: ${num}` //mozna umieszczac zmienne/funkcje wewnatrz backtick

const getNum = function(){
    return num
}

const text2 = `string with value from function: ${getNum()}`

console.log(text1);
console.log(text2);
