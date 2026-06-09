import { auth } from "../../firebase/config";
import { useEffect } from 'react;'

function Login(email,pass) {
    auth.signInWithEmailAndPassword(email,pass)
    .then((response) => {
        setLogin(true);
    })
    .catch(error => {
        setLoginError('Credenciales invalidas')
    })
}

useEffect(
    () => {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    useLinkProps.navigation.navigate("homeMenu")
                }
            }
        )
    },
    []
)

return (
    <View style={styles.container}
)

export default Login;