interface ErrorType {
    [key : string] : string | number;
}

const errorMessage: ErrorType = {
    email: 'email invalido',
    password : 'password incorrecto',
    lala : 2
};


// { email : 'email invalid, 'password : password invalid }