import { Staff } from "./staff";

let staff = new Staff("Staff 1", "staff@gmail.com", 20);

let nameStaff = staff.getName();
console.log(nameStaff);

staff.setName("Staff 2");
let currentNameStaff = staff.getName();
console.log(currentNameStaff);
console.log(staff._name);
