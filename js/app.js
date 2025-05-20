const itemsList = document.querySelectorAll(
    'section, article, h1'
);
const showInfo = function (e) {
    if(e.target === e.currentTarget){
        const text = e.target.tagName
        console.log(text + ' was clicked!')

    }
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showInfo);

});