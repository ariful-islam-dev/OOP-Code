const Person = require('./Person')

class Student extends Person {
    constructor( name, email, subjects, tutionfee){
        super(name, email);
        this._subjects = subjects
        this._tutionfee = tutionfee
    }

    get subjects(){
        return this._subjects;
    }

    get tutionfee(){
        return this._tutionfee
    }
}

module.exports = Student;