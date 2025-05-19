const itemsList = document.querySelectorAll('section, article, h1')

const showTagName = function(e){
    console.log(this.tagName)

    if(this.tagName === 'H1'){
        e.stopPropagation()
    }
}

itemsList.forEach(function(item){
    item.addEventListener('click', showTagName)
})