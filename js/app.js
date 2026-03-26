const textEl = document.querySelector('textarea')
textEl.addEventListener('change', showText)
textEl.addEventListener('input', prepareHeight)

function showText(e){
    console.log(e.target.value)
}

function prepareHeight(e){
    const item = e.target

    if(item.scrollHeight > item.offsetHeight){
        //wysokosc zawartosci textaera jest wieksza niz offsetHeight
        item.style.height = item.scrollHeight + 'px'
        //zwiekszam wysokosc textarea o scrollHeight dodajac px na koncu
    }
}