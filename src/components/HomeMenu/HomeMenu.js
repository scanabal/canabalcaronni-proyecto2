import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../../screens/Home/Home';
import CrearPost from '../../screens/CrearPost/CrearPost';
import MiPerfil from '../../screens/MiPerfil/MiPerfil';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

function HomeMenu() {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="Home" component={ Home } 
                options={
                    {tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />}
                    } 
            />
            <Tab.Screen name="Crear Post" component={CrearPost} 
                options={ 
                    {tabBarIcon: () => <AntDesign name="plus-square" size={24} color="black" /> }
                    } 
            />
            <Tab.Screen name="Mi Perfil" component={MiPerfil} 
                options={ 
                    {tabBarIcon: () => <Feather name="user" size={24} color="black" /> }
                    } 
            />
        </Tab.Navigator>
    );
}
export default HomeMenu;