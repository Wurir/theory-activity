const btnEl = document.querySelector('button')
const pEl = document.querySelector('p')

const handleRender = function(e){
    this.innerText = e.detail
    // wstaw tekst przekazany przy wywołaniu [render]
}

const handleClick = function(e){
    const renderEvent = new CustomEvent('render', { detail: 'new content!'})
    // tworze event o nazwie [render] oraz przekazuje dodatkowe dane w [detail]

    pEl.dispatchEvent(renderEvent)
}

btnEl.addEventListener('click', handleClick)
pEl.addEventListener('render', handleRender)
