class Student {
    constructor(subject, salary) {
        this._subject = subject
        this._salary = salary
    }

    get subjects() {
        return this._subjects;
    }

    get tutionfee() {
        return this._salary
    }
}