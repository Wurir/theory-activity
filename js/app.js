const itemsList = document.querySelectorAll('section, article, h1')

const showTagName = function(e){
    console.log(this.tagName)

    if(this.tagName === 'ARTICLE'){
        e.stopImmediatePropagation()
        // przy uzyciu stopPropagation, wywola sie funcka showText, natomiast
        // uzywajac stopImmediatePropagation, showText nie zostanie wykonane
    }
}

const showText = function(){
    console.log('click on article!')
}

itemsList.forEach(function(item){
    item.addEventListener('click', showTagName)
    if(item.tagName === 'ARTICLE'){
        item.addEventListener('click', showText)
    }
})

