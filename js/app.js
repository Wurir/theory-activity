// W pliku app.js znajdziesz dwie zmienne:
// wartością zmiennej n jest liczba, która określa maksymalną wartość, jaką może przechowywać tablica oddNumbers,
// wartością zmiennej oddNumbers jest pusta tablica. Jak wskazuje nazwa zmiennej, docelowo w tablicy mogą znaleźć się jedynie liczby nieparzyste.
// Napisz program, który uzupełni w sposób automatyczny (czyli pewnie przy wykorzystaniu pętli) tablicę oddNumbers wyłącznie liczbami nieparzystymi, które występują w ciągu od 1 do n.
// Program należy napisać w taki sposób, aby zmiana wartości dla n nie powodowała błędów w jego działaniu.
// Pamiętaj, aby sprawdzić, czy wszystko działa. Najczęściej robimy to poprzez sprawdzenie warunków brzegowych. W tym przypadku warunkami brzegowymi mogą być liczby n=0, n=1, n=100.

const n = 100;
const oddNumbers = [];

for(let i=0; i<=n; i++){
    if(i % 2 !== 0){
        oddNumbers.push(i)
    }
}

console.log(oddNumbers);
