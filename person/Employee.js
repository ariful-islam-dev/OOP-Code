

const UniPerson = require('./UniPerson');

const _employeeID = Symbol('employeeID');
const _salary = Symbol('salary')

class Employee extends UniPerson {
    constructor(id, name, employeeID) {
        super(id, name);
        this[_employeeID] = employeeID || null;
        this[_salary] = null;
    }

    get employeeID() {
        return this[_employeeID];
    }
    set employeeID(value) {
        this[_employeeID] = value;
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