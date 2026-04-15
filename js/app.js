const fn = function(arr, arg1, arg2, arg3){
    console.log(arr, arg1, arg2, arg3)
    return 'abc'
}

const v1 = 111
const v2 = 222

const text = fn`ciąg znaków z ${v1} oraz ${v2} i tyle!`

console.log(text) // stringi z backticka zostana przekazane jako argument [arr],
//nastepnie arg1 to v1, arg2 to v2, nie podalem arg3 wiec bedzie undefined
//do text zostanie przypisane abc bo to zwraca fn