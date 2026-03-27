const ulEl = document.querySelector('ul')
const formEl = document.querySelector('form')

formEl.addEventListener('submit', checkData)

function checkData(e) {
    e.preventDefault()
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const errors = []

    if (name.length === 0) {
        errors.push('Name is required!')
    }

    if (!email.includes('@')) {
        errors.push('Invalid email, "@" is required')
    }

    if (errors.length > 0) {

        ulEl.innerHTML = ''
        errors.forEach(function (error) {
            createError(error, ulEl)
        })
    }
}

function createError(error, parentEl) {
    const li = document.createElement('li')
    li.innerText = error

    parentEl.appendChild(li)
}