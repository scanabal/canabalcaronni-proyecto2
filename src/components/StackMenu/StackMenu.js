import App from "../../../App"
import Home from "../../screens/Home/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function StackMenu(){
    
return(
    
       <NavigationContainer>
            <Stack.Screen name="Login" component= { Login }/>
            <Stack.Screen name="Register" component= { Register }/>
        </NavigationContainer>
)}

export default StackMenu;