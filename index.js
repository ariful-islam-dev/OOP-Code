const Person = require('./Person');
const Teacher = require('./Teacher');
const Student = require('./Student');

const p = new Person('Ariful Islam Raju', 'arifulislam@gmail.com');
const t = new Teacher('Abdullah Al Zarif','zarif@email.com','Computer Fundamental', 40000)
const s = new Student(['Computer 101', 'Physics', 'Math'], 400000)

console.log(t.name);
