function useHtml(str, val){
    return `${str[0]} <b>${val}</b> ${str[1]}`
}

function useMarkdown(str, val){
    return `${str[0]} *${val}* ${str[1]}`
}

const name = "Bartek"

console.log(useHtml`Super programista ten ${name}!`)
console.log(useMarkdown`Super programista ten ${name}!`)