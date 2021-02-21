

const UniPerson = require('./UniPerson');

const _employeeID = Symbol('student');
const _salary = Symbol('salary')

class Employee extends UniPerson {
    constructor(id, name, employeeID, guardian) {
        super(id, name);
        this[_employeeID] = employeeID;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_salary] = null;
    }

    get employeeID() {
        return this[_employeeID];
    }

    get salary(){
        return this[_salary];
    }
    set salary(value){
        this[_salary] = value
    }

    toString(){
        return `
            ${super.toString()}, EmployeeID = ${this[_employeeID]}
        `
    }
}

module.exports = Employee;