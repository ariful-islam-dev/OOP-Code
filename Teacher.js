const Person = require('./Person');


class Teacher extends Person {

    constructor(name, email, subject, salary) {
        super(name, email);
        this._subject = subject
        this._salary = salary
    }

    get subjects() {
        return this._subjects;
    }

    get tutionfee() {
        return this._salary
    }
    print() {
        super.print()
        console.log(`Subject: ${this._subject}, Salary: ${this._salary}`);
    }
}

module.exports = Teacher;