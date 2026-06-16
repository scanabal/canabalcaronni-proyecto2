import { auth } from "../../firebase/config";
import { useState, useEffect } from 'react';
import { Pressable } from "react-native";
import { Text, View, TextInput, StyleSheet} from "react-native";

function Login(props) {

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)
    const [LoginError, setLoginError] = useState ("")

    function onSubmit(email,password){
        if(password.length < 8){
            alert("Password must have more than 8 characters")
            return
        }

         auth.signInWithEmailAndPassword(email,password)
    .then((response) => {
         setLogin(true); 
    //props nav nav homeMenu      
    })
    .catch(error => {
        if(error.code === "auth/invalid-email"){
            alert("Mail incorrecto")
        }
        if(error.code === "auth/internal-error"){
            alert("Credenciales invalidas")
        }
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
    <View style={styles.container}  >  
        <Text style={styles.title}>Login</Text>

        <TextInput 
        style={styles.input}
        keyboardType='email-address'
        placeholder='email'
        onChangeText= { text => setEmail(text)}
        value={email}/>
  

        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='password'
        onChangeText= { text => setPassword(text) }
        value={password}/>
        

        <Pressable   style={styles.clickeableForm}  onPress={() => onSubmit(email,password)}>
             <Text style={styles.boton} > Login </Text> 
           </Pressable>

        <Pressable  style={styles.clickeable}  onPress={() => props.navigation.navigate("Register")}>
            <Text style={styles.boton}>No tengo cuenta, registrarme</Text>
        </Pressable>
    </View>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#000",
    },

    texto: {
        width: 300,
        fontSize: 16,
        marginBottom: 5,
        color: "#fff",
    },

    input: {
        width: 600,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        marginVertical: 8,
    },

    clickeableForm: {
        width: 600,
        backgroundColor: "#2482c9ff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15,
    },

    clickeable: {
        width: 600,
        backgroundColor: "#2482c9ff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },

    boton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Login;