const itemsList = document.querySelectorAll('section, article, h1')

const showInfo = function(e){
    let text = e.target.tagName + ': '
    // pobieram nazwe tagu elementu, ktory zostal klikniety
    text += this.tagName
    console.log(text);
}

itemsList.forEach(function(item){
    item.addEventListener('click', showInfo)
})

