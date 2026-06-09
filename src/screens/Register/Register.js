import { auth } from "../../firebase/config";
import { useState } from "react";
import { Pressable } from "react-native";
import { Text, View, TextInput} from "react-native";

function Register (email,pass){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [RegisterError, setRegisterError] = useState("");

    function onSubmit(user, email, pass){
         auth.createUserWithEmailAndPassword(email,pass)
    .then( response => {
        //db collection?
        setRegister(true);
    })
    .catch( error => {
        setRegisterError('Fallo al registrarse.')
    })
    }


    return (
        <View > 
        {/* style={styles.container} */}
         <Text>Register</Text>

         <TextInput 
        
        keyboardType='email-address'
        placeholder='email'
        onChangeText= { text => setEmail(text)}
        value={email}/>

        {/* style={styles.field} */}

        <TextInput 
        
        keyboardType='default'
        placeholder='usuario'
        onChangeText= { text => setUsername(text) }
        value={username}/>
       {/* style={styles.field} */}
        <TextInput 
        
        keyboardType='default'
        placeholder='password'
        onChangeText= { text => setPassword(text) }
        value={password}/>
        {/* style={styles.field} */}

        <Pressable
                onPress={() => onSubmit(email, password)}>

                     <Text>Registrarme</Text>
                     {/* style={styles.buttonText} */}
            </Pressable>
           
         </View>

         
)
}
   


export default Register;