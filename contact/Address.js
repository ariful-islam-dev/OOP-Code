const _roadNo = Symbol('roadNo');
const _city = Symbol('city');
const _region = Symbol('region');
const _country = Symbol('country');
const _postalCode = Symbol('postalCode')
const _id = Symbol('_id')

class Address {
    constructor({ id, roadNo, city, region, country, postalCode }) {
        this[_id] = id
        this[_roadNo] = roadNo || '';
        this[_city] = city || '';
        this[_region] = region || '';
        this[_country] = country || '';
        this[_postalCode] = postalCode || '';
    }

    get id() {
        return this[_id]
    }

    get roadNo() {
        return this[_roadNo]
    }
    set roadNo(value) {
        this[_roadNo] = value
    }
    get city() {
        return this[_city]
    }
    set city(value) {
        this[__city] = value
    }

    get region() {
        return this[_region]
    }
    set region(value) {
        this[_region] = value
    }

    get country() {
        return this[_country]
    }
    set country(value) {
        this[_country] = value
    }

    get postalCode() {
        return this[_postalCode]
    }

    set postalCode(postalCode) {
        this[_postalCode] = postalCode
    }

    toString() {
        return `
        Id: ${this[_id]}
        RodaNo: ${this[_roadNo]}, 
        City: ${this[_city]}, 
        Region: ${this[_region]}, 
        Country : ${this[_country]}, 
        PostalCode: ${this[_postalCode]}
        `
    }
}

module.exports = Address;