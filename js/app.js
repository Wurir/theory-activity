function Student(initFirstName, initLastName){
    this.firstName = initFirstName
    this.lastName = initLastName
}

Student.prototype.showFullName = function(){
    console.log(this.firstName, this.lastName);
}

const student1 = new Student('Anna', 'Kowal')
student1.showFullName()

const student2 = new Student('Michał', 'Nowak')
student2.showFullName()