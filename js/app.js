const btnElement = document.querySelector('button')
const pElement = document.querySelector('p')

const handleRender = function (e) {
    this.innerText = e.detail
    // wstaw tekst przekazany przy wywolaniu
}

const handleClick = function () {
    const renderEvent = new CustomEvent('render', {
        detail: 'new content!'
    })
    // tworze event o nazwie 'render'
    // oraz przekazuje dodatkowe dane w 'detail'

    pElement.dispatchEvent(renderEvent)
    // wywołuje utworzony event na elemencie p
}

btnElement.addEventListener('click', handleClick)
pElement.addEventListener('render', handleRender)