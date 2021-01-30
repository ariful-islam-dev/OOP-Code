const person = {};

person.name = 'Ariful Islam';
person.email = 'ariful4082@gmail.com';
// console.log(person);

class Person {

    constructor(name, email) {
        this._name = name
        this._email = email
    }

    getName() {
        return this._name
    }

    setName(name){
        this._name=name
    }

    getEmail(){
        return this._email
    }
    setEmail(email){
        this._email=email
    }

    print() {
        console.log(this);
    }
}

const p1 = new Person('Ariful Islam', 'arifulislam@gmail.com');
const p2 = new Person('Aysha Moni', 'ayshamoni@gmail.com');
const p3 = new Person('Zarif', 'zarif@email.com')

p1.setName('MAI Raju')
p1.setEmail('ariful4082@gmail.com')
console.log(p1.getName(), p1.getEmail());

