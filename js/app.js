const studentsNum = parseInt(prompt('Liczba uczniów?'))
const studentsList = []

for(let i=0; i<studentsNum; i++){
    const firstName = prompt('Podaj imię (' + i + ')')
    const lastName = prompt('Podaj nazwisko (' + i + ')')

    const newStudent = new Student(firstName, lastName)
    studentsList.push(newStudent)
}

studentsList.forEach(function(item){
    item.showFullName()
})

function Student(initFirstName, initLastName){
    this.firstName = initFirstName
    this.lastName = initLastName
    this.showFullName = function(){
        console.log(this.firstName, this.lastName);
    }
}