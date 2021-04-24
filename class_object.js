class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Kolimunnesa School."
    }
}

const student1 = new Student(01, "Amirul");
const student2 = new Student(02, "Islam");
const student3 = new Student();
console.log(student1.name, student2.id, student3)