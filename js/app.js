const btnEl = document.querySelector('button')

const handleClick = function(e){
    console.log('button was clicked')
    console.log(e.isTrusted)
    // zwraca [true], gdy uruchomione przez uzytkownika
    // zwraca [false], gdy uruchomione z poziomu kodu JS
}

btnEl.addEventListener('click', handleClick)

const eventClick = new Event('click', {
    'bubbles': true, // czy wykorzystujemy faze bubbling w propagacji
    'cancelable': true, // czy mozna zatrzymac event za pomoca preventDefault()
})

btnEl.dispatchEvent(eventClick)