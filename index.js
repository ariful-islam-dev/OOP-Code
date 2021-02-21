const { Guardian, Student, Account, Teacher } = require('./person');
const { Contact, Address } = require('./contact');
const { Department, Subject } = require('./univercity');

// Guardian ID: 1

const guardian = new Guardian(1, 'Mr. Khaled', 'Engineer', 75000);
guardian.blood = 'O+';
guardian.contact = new Contact({ id: 1, email: 'khaled@test.com', phone: '123456789' });

guardian.contact.address = new Address({ id: 1, roadNo: '6B', city: 'Munshigonj City', region: 'Dhaka', country: 'Bangladesh', postalCode: 1522 })


// Student Id: 1 

const student = new Student(1, 'Rafiqul Islam', 'ST001', guardian);
student.blood = 'A+';
student.contact = new Contact({
    id: '2',
    email: 'rafiq@test.com',
    phone: '012345676',
    alternativePhone: student.guardian.contact.phone,
    address: student.guardian.contact.address
})



// Deperment Id: 1

const department = new Department({
    id: 1,
    name: 'SWE'
})
student.department = department;
department.subjects = [
    new Subject(1, 'Computer Fundamentals', 4),
    new Subject(2, 'Introduction to Software Engineering', 3),
    new Subject(3, 'Software Testing', 4),
];

const credit = student.department.subjects.reduce((a, b) => {
    a += b.credit;
    return a
}, 0)
// console.log('Total Credit ' + credit);

//Account id 1
const account = new Account(1, 'student', 2000, new Date())
student.account = account


// Dean

const dean = new Teacher(1, 'Mr. Biplop', department.subjects[0], 'EMP1001')
dean.blood = 'AB+'
dean.department = department
dean.salary = 100000;
// dean.employeeID = 'EMP1001'
dean.contact = new Contact({
    id: 1,
    email: 'biplop@test.com',
    phone: '0123000459',
    address: new Address({
        id: 1,
        roadNo: '423 AB',
        city: 'Dhaka City',
        region: 'Dhaka',
        country: 'Bangladesh',
        postalCode: 1212
    })
})

department.dean = dean;
// console.log(dean);

//teachers

const teacher1 = new Teacher(2, 'Mr. Afjal', department.subjects[1], 'EMP1002')
teacher1.department = department
teacher1.blood = 'AB-'
teacher1.salary = 40000
// teacher1.employeeID ='EMP1002'
teacher1.contact = new Contact({
    id: 1,
    email: 'afjal@test.com',
    phone: '0123000495',
    address: new Address({
        id: 1,
        roadNo: '654 CD',
        city: 'Dhaka City',
        region: 'Dhaka',
        country: 'Bangladesh',
        postalCode: 1216
    })
})

const teacher2 = new Teacher(3, 'Mrs. Ruma', department.subjects[2], 'EMP1003')
teacher2.department = department
teacher2.blood = 'O+'
teacher2.salary = 42000
// teacher2.employeeID ='EMP1003'
teacher2.contact = new Contact({
    id: 1,
    email: 'ruma@test.com',
    phone: '0123000666',
    address: new Address({
        id: 1,
        roadNo: '65 D-Block',
        city: 'Dhaka City',
        region: 'Dhaka',
        country: 'Bangladesh',
        postalCode: 1220
    })
})
department.teachers = [teacher1, teacher2]
department.addTeacher(dean)


// student.department.teachers.forEach((teacher, index)=>{
//     console.log(`${index+1}. ${teacher.name} ${teacher.subject.name}`);
// })
guardian.addChild(student)

const teachersSalary = guardian.children[0].department.teachers.reduce((acc, cur) => {
    acc += cur.salary
    return acc
}, 0)
console.log(teachersSalary);

let count = 0;
if (student.blood === 'O+') count++
if (student.guardian.blood === 'O+') count++
student.department.teachers.forEach(teacher => {
    if (teacher.blood === 'O+') count++
})

console.log(count);
