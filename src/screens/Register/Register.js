import { auth } from "../../firebase/config";
import { useState } from "react";
import { Pressable } from "react-native";
import { Text, View, TextInput} from "react-native";

function Regisimport { auth } from "../../firebase/config";
import { useState } from "react";
import { Pressable } from "react-native";
import { Text, View, TextInput} from "react-native";

function Register (props){
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [RegisterError, setRegisterError] = useState("");

    function onSubmit(user, email, password){
         auth.createUserWithEmailAndPassword(email,password)
    .then( response => {
        //db collection?
        setRegister(true);
        props.navigation.navigate("Login")
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
        onChangeText= { text => setUser(text) }
        value={user}/>
       {/* style={styles.field} */}
        <TextInput 
        
        keyboardType='default'
        placeholder='password'
        onChangeText= { text => setPassword(text) }
        value={password}/>
        {/* style={styles.field} */}

        <Pressable
                onPress={() => onSubmit(user, email, password)}>

                     <Text>Registrarme</Text>
                     {/* style={styles.buttonText} */}
            </Pressable>
           
         </View>

         
)
}
   


export default Register;