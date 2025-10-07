const itemsList = document.querySelectorAll('section, article, h1')

const showTagName = function(e){
    console.log(this.tagName)

    if(this.tagName === 'ARTICLE'){
        e.stopPropagation()
        // zatrzymuje propagacje na <article> dla elementow wyzej w drzewie DOM
        // tj. dla przodkow <article> nie sa uruchamiane callbacki
    }
}

itemsList.forEach(function(item){
    item.addEventListener('click', showTagName)
})