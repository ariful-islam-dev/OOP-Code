
const _id = Symbol('id')
const _name = Symbol('name');
const _subjects = Symbol('subjects');
const _dean = Symbol('dean');
const _teachers = Symbol('teachers')
class Department {
    constructor({ id, name, subjects, dean, teachers }) {
        this[_id] = id;
        this[_name] = name;
        this[_subjects] = subjects || [];
        this[_dean] = dean || null;
        this[_teachers] = teachers || [];
    }

    get id() {
        return this[_id];
    }
    get name() {
        return this[_name];
    }

    set name(value) {
        this[_name] = value
    }

    get subjects() {
        return this[_subjects];
    }
    get subjects() {
        this[_subjects] = subjects
    }

    get dean() {
        return this[_dean];
    }

    set dean(value) {
        this[_dean] = value
    }

    get teacher() {
        return this[_teachers]
    }
    set teacher() {
        this[_teachers] = thecher
    }

    addTeacher(teacher) {
        this[_teachers].push(teacher)
    }

    toString() {
        return `
        ID: ${this[_id]},
        name: ${this[_name]}
         
        `
    }
}
module.exports = Department