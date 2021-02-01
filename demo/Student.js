const Person = require('./Person')

const _subjects = Symbol('subjects')
const _tutionfee = Symbol('tutionfee')

class Student extends Person {
    constructor( name, email, subjects, tutionfee){
        super(name, email);
        this[_subjects] = subjects
        this[_tutionfee] = tutionfee
    }

    get subjects(){
        return this[_subjects];
    }

    get tutionfee(){
        return this[_tutionfee]
    }

    print(){
        super.print()
        console.log(`Subjects: ${this[_subjects]} , Tutionfee: ${this[_tutionfee]}`);
    }
}

module.exports = Student;