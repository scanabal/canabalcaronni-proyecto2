import { db, auth } from "../../firebase/config";
import { useState } from "react";
import { Pressable } from "react-native";
import { Text, View, TextInput, StyleSheet} from "react-native";

function Register (props){
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [RegisterError, setRegisterError] = useState("");

    function onSubmit(user, email, password){
         auth.createUserWithEmailAndPassword(email,password)
    .then( res => {
        db.collection("users").add({
            email: email,
            username: user,
            createdAt: Date.now()
        })
        .then(() =>{
         setRegister(true);   
         props.navigation.navigate("Login")
        })
        
        
    })
    .catch( error => {
        setRegisterError('Fallo al registrarse.')
    })
    }

    return (
        <View  style={styles.container}>
         <Text style={styles.title}>Register</Text>

         <TextInput 
        style={styles.input} 
        keyboardType='email-address'
        placeholder='email'
        onChangeText= { text => setEmail(text)}
        value={email}/>

         

        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='usuario'
        onChangeText= { text => setUser(text) }
        value={user}/>
       
        <TextInput 
        style={styles.input} 
        keyboardType='default'
        placeholder='password'
        onChangeText= { text => setPassword(text) }
        value={password}/>
        

        <Pressable style={styles.button} onPress={() => onSubmit(user, email, password)}>
            <Text style={styles.buttonText}>Registrarme</Text>
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
        color: "#000000",
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

    button: {
        width: 600,
        backgroundColor: "#2482c9ff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    infoBox: {
        width: 300,
        marginTop: 25,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#fff",
    },
});


export default Register;