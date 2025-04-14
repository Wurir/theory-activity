let x = 12;
x += '0'; 
// x = 12 + '0';
console.log(x);
// '120' (string)

x -= 100; 
// x = 120 - 100;
console.log(x); 
// 20

x *= 'a'; 
// x = 20 * 'a';
console.log(x); 
// NaN

x = 1000;
console.log(x); 
// 1000

x /= 'b'; 
// x = 1000 / 'b'
console.log(x); 
// NaN
// jeśli wykorzystalibyśmy
// słowo kluczowe const
// to pojawiłby się błąd
// ponieważ ta zmienna
// nie może być nadpisana