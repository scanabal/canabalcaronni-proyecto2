import { auth } from "../../firebase/config";

function register (email,pass){
    auth.createUserWithEmailAndPassword(email,pass)
    .then( response => {
        setRegister(true);
    })
    .catch( error => {
        setRegisterError('Fallo al registrarse.')
    })
}

export default register;