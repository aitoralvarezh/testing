enum  Role {
    Doctor,
    Nurse,
    Assistant,
    Admin
}

interface Staff  {
    name : string,
    email: string,
    role : Role,
    yearsWorked: number,
}

const doctor = {
    name :'Martin',
    email : 'MartinNewEmail@gmail.com',
    role : Role.Doctor,
    
}

const nurse = {
    name : 'Eric',
    email : 'eric@gmail.com',
    role: Role.Nurse,
    yearsWorked: 3,
    total : 25,
    currentBill() {
        return  `el valor total de la factura es ${this.total}`
    }
    
}

const printStaff = (staff : Staff) => {
    console.log(staff)
}

printStaff(nurse);


interface Billable {
   // total: number,
    currentBill(): string
}

const printCurrentBill = (bill : Billable) => {
    console.log(bill.currentBill())
}