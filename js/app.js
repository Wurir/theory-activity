console.log('0' == 0); 
// true,
// bo '0' => 0, 0 === 0

console.log(0 == false); 
// true
// bo false => 0, 0 === 0

console.log(false == '0'); 
// true
// bo false => 0 & '0' => 0, 0 === 0
// jeśli mamy luźne (loose) porównanie tj. ==
// JS używa niejawnej konwersji, aby wartości
// sprowadzić do tego samego typu
// i dopiero potem porównać

console.log('0' === 0); 
// false

console.log(0 === false); 
// false

console.log(false === '0');
 // false
// w przypadku tzw. ścisłego (strict) porównania
// tj. użycia === typ wartości musi się zgadzać
// jeśli tak nie jest już mamy fałsz