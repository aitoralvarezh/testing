type User = {
    name : string;
    startDate : Date;
};

type Admin = {
    name : string;
    permission : string [];
};

//type userAdmin = User & Admin;
interface UserAdmin extends User, Admin {};

const assistant : UserAdmin = {
    name : 'Rodrigo',
    startDate: new Date(),
    permission: ['see patient chart'],
};