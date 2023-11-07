import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import Unit from "../pages/Home";
import Login from "../pages/Login";

const HomeStack = createNativeStackNavigator(); 

function StackTab() {
    return(
      <HomeStack.Navigator initialRouteName="Tabs">
        <HomeStack.Screen options={{headerShown:false}} name="Home" component={Unit}/>
        <HomeStack.Screen options={{headerShown:false}} name="Login" component={Login}/>
      </HomeStack.Navigator>
    )
}

export default function StackTop() {
    return (   
        <SafeAreaView style={{zIndex:4,height:'100%'}}>
            <Stack.Screen options={{headerShown:false}}/>
            <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
                <StackTab/>
            </NavigationContainer>
        </SafeAreaView>
    );
  }
  