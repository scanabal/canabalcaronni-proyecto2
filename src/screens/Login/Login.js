import { auth } from "../../firebase/config";
import { useState, useEffect } from 'react';
import { Pressable } from "react-native";
import { Text, View, TextInput} from "react-native";

function Login(props) {

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)
    const [LoginError, setLoginError] = useState ("")

    function onsubmit(email,pass){
        if(pass.length < 8){
            alert("Password must have more than 8 characters")
            return
        }

         auth.signInWithEmailAndPassword(email,pass)
    .then((response) => {
         setLogin(true); 
          
    })
    .catch(error => {
       
         setLoginError('Credenciales invalidas')
         console.log(error)
    })
    }
   

useEffect(
    () => {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                props.navigation.navigate("homeMenu")
                }
            }
        )
    },
    []
)

return (
    <View >
        {/* style={styles.container} */}
        <Text >Login</Text>

        <TextInput 
        
        keyboardType='email-address'
        placeholder='email'
        onChangeText= { text => setEmail(text)}
        value={email}/>
       {/* style={styles.input} */}

        <TextInput 
        
        keyboardType='default'
        placeholder='password'
        onChangeText= { text => setPassword(text) }
        value={password}/>
        {/* style={styles.input} */}

        <Pressable onPress={() => onsubmit(email,pass)}>
            <Text > Login </Text>
            {/* style={styles.boton} */}
        </Pressable>

        <Pressable onPress={() => props.navigation.navigate("Register")}>
            <Text >No tengo cuenta, registrarme</Text>
            {/* style={styles.boton} */}
            {/* XQ NO FUNCIONA ONPRESS */}
        </Pressable>
    </View>
);
}

export default Login;