"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    getName() {
        return this._name;
    }
    setName(name1) {
        this._name = name1;
    }
    getEmail() {
        return this._email;
    }
    setEmail(email1) {
        this._email = email1;
    }
    getAge() {
        return this._age;
    }
    setAge(age1) {
        this._age = age1;
    }
}
exports.Staff = Staff;
