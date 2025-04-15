const randomNumber = Math.round(Math.random() * 5)
// losuje liczbe z przedzialu od 0 do 5

let userNumber
// deklaruje zmienna, ktora będzie przechowywać liczbę wprowadzoną przez użytkownika

let counter = 0
// liczba wykonywanych prób

// wykonuj pętle dopóki wylosowa liczba będzie różna od tej wprowadzonej przez uzytkownika
while(randomNumber !== userNumber) {
    userNumber = parseInt(prompt('Zgadnij liczbę!'))
    counter++
}

alert('Gratuluję! Zgadłeś za '+counter+' razem!')