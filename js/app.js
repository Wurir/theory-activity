const books = [{
    id: 1,
    title: "Prince Caspian",
    language: "en"
  },
  {
    id: 2,
    title: "Mały książę",
    language: "pl"
  },
  {
    id: 3,
    title: "Chemia śmierci",
    language: "pl"
  },
  {
    id: 4,
    title: "Duma i uprzedzenie",
    language: "pl"
  },
    {
    id: 5,
    title: "Madame Bovary",
    language: "fre"
  }
];

books.sort(function(a, b) {
    if(a.language === 'pl'){
        return -1
    } else {
        return 1
    }
})

console.log(books);
