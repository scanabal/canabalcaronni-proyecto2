import App from "../../../App"
import Home from "../../screens/Home/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function StackMenu(){
    
return(
    
       <NavigationContainer>
            <Stack.Screen name="Login" component= { Login } options={ { headerShown: false} }/>
            <Stack.Screen name="Register" component= { Register } options={ { headerShown: false} }/>
        </NavigationContainer>
)}

export default StackMenu;