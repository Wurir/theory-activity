const itemsList = document.querySelectorAll('section, article, h1')

const showInfo = function(e){
    if(e.target === e.currentTarget){
        //wykonaj tylko wtedy gdy callback jest uruchomiony bezposrednio
        //czyli nie przez propagacje
        let text = e.target.tagName
        console.log(text + ' was clicked')
    }
}

itemsList.forEach(function(item){
    item.addEventListener('click', showInfo)
})

