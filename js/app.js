function Student(initFirstName, initLastName){
    this.firstName = initFirstName
    this.lastName = initLastName
}

const student1 = new Student('Marek', 'Nowak')
const student2 = new Student('Anna', 'Kowal')

console.log(student1, student2);
