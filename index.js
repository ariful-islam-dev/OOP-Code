const person = {};

person.name = 'Ariful Islam';
person.email = 'ariful4082@gmail.com';
// console.log(person);

class Person {

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    changeName(name) {
        this.name = name
    }
    arrow = (email) => {
        this.email = email;
    }
    sendEmail(msg) {
        console.log('To', this.email);
        console.log('Sending Email', msg);
    }

    print() {
        console.log(this);
    }
}

const p1 = new Person('Ariful Islam', 'arifulislam@gmail.com');
const p2 = new Person('Aysha Moni', 'ayshamoni@gmail.com');
const p3 = new Person('Zarif', 'zarif@email.com')

p3.sendEmail('Hello')

p1.changeName('M.A.I. Raju')

p1.print()
p3.print()

p1.arrow('ariful4082@gmail.com')
p1.print();