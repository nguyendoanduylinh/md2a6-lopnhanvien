export class Staff {
  _name: string;
  _email: string;
  _age: number;
  constructor(name: string, email: string, age: number) {
    this._name = name;
    this._email = email;
    this._age = age;
  }
  getName(): string {
    return this._name;
  }
  setName(name1: string): void {
    this._name = name1;
  }
  getEmail(): string {
    return this._email;
  }
  setEmail(email1: string): void {
    this._email = email1;
  }
  getAge(): number {
    return this._age;
  }
  setAge(age1: number): void {
    this._age = age1;
  }
}
