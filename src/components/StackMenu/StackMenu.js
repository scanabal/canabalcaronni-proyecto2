import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComentarPost from '../../screens/ComentarPost/ComentarPost';
// IMPORTAR HOME

const Stack = createNativeStackNavigator()

function StackMenu(){
    
return(
    
       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component= { Home } options={ { headerShown: false} }/>
            <Stack.Screen name="comentarPost" component= { ComentarPost } options={ { headerShown: false} }/>
        </Stack.Navigator>
);
}

export default StackMenu;