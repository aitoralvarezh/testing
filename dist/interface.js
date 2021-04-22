"use strict";
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Assistant"] = 2] = "Assistant";
    Role[Role["Admin"] = 3] = "Admin";
})(Role || (Role = {}));
const doctor = {
    name: 'Martin',
    email: 'Martin@mail.com',
    role: Role.Doctor,
};
const printStaff = (staff) => {
    console.log(staff);
};
printStaff(doctor);
