const itemsList = document.querySelectorAll('section, article, h1')

const showTagName = function(){
    console.log(this.tagName)
}

itemsList.forEach(function(item){
    item.addEventListener('mouseenter', showTagName)
})