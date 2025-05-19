const linksList = document.querySelectorAll('a')

const getHref = function(e){
    e.preventDefault()

    const href = this.getAttribute('href')

    console.log(href)
}

linksList.forEach(function(item){
    item.addEventListener('click', getHref)
})