const { Guardian, Student } = require('./person');
const { Contact, Address } = require('./contact');

// Guardian ID: 1

const guardian = new Guardian(1, 'Mr. Khaled', 'Engineer', 75000);
guardian.blood = 'O+';
guardian.contact = new Contact({ id: 1, email: 'khaled@test.com', phone: '123456789' });

guardian.contact.address = new Address({ id: 1, roadNo: '68', city: 'Munshigonj City', region: 'Dhaka', country: 'Bangladesh', postalCode: 1522 })


// Student Id: 1 

const student = new Student(1, 'Rafiqul Islam' , 'ST001', guardian);
console.log(student);