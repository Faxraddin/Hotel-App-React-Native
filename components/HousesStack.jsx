import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import Houses from "../pages/Houses";

const HomeStack = createNativeStackNavigator();

export default function HousesStack(){
    <SafeAreaView>
        <Stack.Screen options={{headerShown:false}}/>
        <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>

            <HomeStack.Navigator initialRouteName="Houses">
                <HousesStack.Screen name='Houses' component={Houses}/>
            </HomeStack.Navigator>

        </NavigationContainer>
    </SafeAreaView>
}