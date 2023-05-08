class Person {
    constructor(private _name: string, private _age: number) {
    }
    get name(): string {
        return this._name
    }
    get age(): number {
        return this._age
    }
    public getDetails() {
        // console.log(`${this.name} & ${this.age}`);
        return `${this._name} & ${this._age}`
    }
}

const person1 = new Person("Rafin", 22)
person1.getDetails()

class Student extends Person {
    constructor(_name: string, _age: number,private _grade:string ) {
        super(_name, _age)
    }

    public getGrade():string{
        console.log( `This students grade is ${this._grade}`);
        return `This students grade is ${this._grade}`
    }
}

const Student1=new Student("Rafin", 15, "A+");
Student1.getGrade();