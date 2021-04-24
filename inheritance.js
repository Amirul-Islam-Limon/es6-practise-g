class Parents{
    constructor(){
        this.father = "Salauddin";
    }
}

class Child1 extends Parents {
    constructor(name){
        super()
        this.name = name;
    }
    getfullName(){
        return `${this.name} ${this.father}`
    }
}
const child1 = new Child1("Amirul");
console.log(child1, child1.getfullName());

class Child2{
    constructor(name){
        this.name = name;
    }
}

const child2 = new Child2("Islam");
console.log(child2);

