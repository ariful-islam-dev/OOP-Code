const person = {};

person.name = 'Ariful Islam';
person.email = 'ariful4082@gmail.com';
console.log(person);

class Person {
    name = 'Person 1';
    email = 'person@gmail.com';
}

const p1 = new Person();
const p2 = new Person();
p2.name = 'person 2';
p2.email = 'person2@email.com'

console.log(p1);
console.log(p2);