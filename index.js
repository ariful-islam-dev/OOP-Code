const person = {};

person.name = 'Ariful Islam';
person.email = 'ariful4082@gmail.com';
// console.log(person);

class Person {

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
        console.log(this);
    }
}

const p1 = new Person('Ariful Islam', 'arifulislam@gmail.com');
const p2 = new Person('Aysha Moni', 'ayshamoni@gmail.com');
const p3 = new Person('Zarif', 'zarif@email.com')

p1.name = 'Ariful'
console.log(p1.name);
p1.print()