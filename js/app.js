const txt = '245.65'
const numInt = parseInt(txt)
const numFloat = parseFloat(txt)

// JS nie rozróżnia wartości całkowitych (integer/int) oraz rzeczywistych (float)
// jednak możemy "obciąć" wartości po przecinku (kropce)

console.log(numInt, typeof numInt, numFloat, typeof numFloat);
// 245 number 245.65 number