const itemsList = document.querySelectorAll('section, article, h1')

const showTagName = function () {
    console.log(this.tagName)
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showTagName, false)
    // ostatni parametr jest ustawiany domyślnie na false
    // dlatego nie musimy go pisać dla [click]
    // oznacza to, że ma zostać wykorzystana
    // faza [bubbling] propagacji
})