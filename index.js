const person = {};

person.name = 'Ariful Islam';
person.email = 'ariful4082@gmail.com';
// console.log(person);

class Person {

    static className = "Person";
    static PI = 3.1416;

    constructor(name, email) {
        this._name = name
        this._email = email
    }
    get name() {
        console.log('This is a function call');
        return this._name;
    }

    set name(value) {
        if (value.toLowerCase() === 'ariful') return;
        this._name = value
    }


    print() {
        console.log('Person, ' + this + '');
    }

    toString() {
        return `Name: ${this._name}, Email: ${this._email}`
    }

    static isValid(age) {
        return age >= 18;
    }

    
}

const p1 = new Person('Ariful Islam', 'arifulislam@gmail.com');
const p2 = new Person('Aysha Moni', 'ayshamoni@gmail.com');
const p3 = new Person('Zarif', 'zarif@email.com')

const p4 = { _name: 'Test', _email: 'test@email.com' };

console.log(Person.PI);

const testUser = {
    name: 'Test',
    email: 'test@gmail.com',
    age:15
}

let p5 = null
if(Person.isValid(testUser.age)){
    p5 = new Person(testUser.name, testUser.age)

}
console.log(p5);