var num = 222;
const str = 'jakiś ciąg znaków';
let arr = [];

num = 1 + 2
// zmienna została już zadeklarowana więc nie musimy ponownie używać var, przechowywana wartość to 3

str = 'nowy tekst'
// ten kod spowoduje błąd! zmienne zadeklarowane za pomocą słowa kluczowego const, nie mogą byc nadpisywane

arr.push(11)
// do pustej tablicy dodaje element, w tym przypadku jest to liczba (typ number)
// która dodawana jest za pomocą metody .push()
// tak nazywamy funkcję w obiekcie