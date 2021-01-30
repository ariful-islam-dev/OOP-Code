class Student {
    constructor(subjects, tutionfee){
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