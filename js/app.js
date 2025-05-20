const btnElement = document.querySelector('button')

const handleClick = function (e) {
    console.log('button was clicked')
    console.log(e.isTrusted)
}

btnElement.addEventListener('click', handleClick)

const eventClick = new Event('click', {
    'bubbles': true,
    // czy wykorzystujemy faze bubbling przy propagacji
    'cancelable': true,
    //czy mozna zatrzymac event za pomocą .preventDefault()
})
// tworze event typu 'click'

btnElement.dispatchEvent(eventClick)