const person = {};

person.name = 'Ariful Islam';
person.email = 'ariful4082@gmail.com';
// console.log(person);

class Person {

    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

const p1 = new Person('Ariful Islam', 'arifulislam@gmail.com');
const p2 = new Person('Aysha Moni','ayshamoni@gmail.com');
const p3 = new Person('Zarif', 'zarif@emil.com')

console.log(p1);
console.log(p2);
console.log(p3);