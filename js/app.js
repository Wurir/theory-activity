const btnsList = document.querySelectorAll('button')
const pElement = document.querySelector('p')

const renderInfo = function(e){
    if(pElement){
        let text = parseInt(e.timeStamp / 1000)
        // ilosc sekund of uruchomienia strony
        text += ': ' + this.tagName
        text += ' -> ' + e.type
        pElement.innerText = text
    }
}

btnsList.forEach(function(btn){
    btn.addEventListener('mouseenter', renderInfo)
    btn.addEventListener('click', renderInfo)
})