const itemsList = document.querySelectorAll('section, article, h1')

const showTagName = function () {
    console.log(this.tagName)
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showTagName, true)
    // ostatni parametr jest ustawiony na true,
    // co oznacza, że korzystamy z fazy [capturing]
    // propagacja odbywa się z góry na dół
})