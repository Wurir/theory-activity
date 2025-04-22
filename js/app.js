function Student(initFirstName, initLastName){
    this.firstName = initFirstName
    this.lastName = initLastName
    this.class = '2B'
    this.showFullName = function(){
        console.log(this.firstName, this.lastName)
    }
}

const student1 = new Student('Marek', 'Nowak')
student1.firstName = 'Darek'
student1.lastName = 'Jarek'
const student2 = new Student('Anna', 'Kowal')

console.log(student1.class, student2.class); // 2B 2B
student1.showFullName() // Darek Jarek
