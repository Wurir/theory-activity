const inputEl = document.querySelector('input')
const spanEl = document.querySelector('span')

inputEl.addEventListener('input', checkEmail)

function checkEmail(e){
    const self = e.target
    const email  = self.value

    if(!email.includes('@')){
        //jesli email nie posiada znaku '@' to..
        self.style.outline = 'none'
        self.style.border = '1px solid red'
        spanEl.innerText = 'Wrong email'
    } else {
        self.style.border = '1px solid green'
        spanEl.innerText = ''
    }
}