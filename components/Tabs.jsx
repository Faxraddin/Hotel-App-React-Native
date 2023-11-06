import Houses from '../pages/Houses';
import Unit from '../pages/Home';

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

const Tab = createBottomTabNavigator();

function Tabs() {

    return (
      <Tab.Navigator screenOptions={
          ({ route,navigation }) => ({
              tabBarIcon: ({ color,focused,size}) =>{
                  let iconName;
                  if(route.name==='Home'){
                    focused ? iconName='home' : iconName='home-outline';
                    return <Ionicons name={iconName} size={size} color={color}/>
                  } else if (route.name==='Houses'){
                    return <MaterialIcons name="hotel" size={size} color={color}/>
                  }
              },
              headerShown: false,
              headerTitle:''
          })
      }>
        <Tab.Screen name="Houses" component={Houses} />
      </Tab.Navigator>
    );
}
  

export default function TabBottom() {
    return(
        <SafeAreaView>
            <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
                <Tabs/>
            </NavigationContainer>
        </SafeAreaView>
    )
}