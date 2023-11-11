import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native";

import Houses from "../pages/Houses";
import HouseBox from "./House";
import HouseDeails from "../pages/HouseDetails";

const HomeStack = createNativeStackNavigator();

function StackTab() {
    return(
        <HomeStack.Navigator initialRouteName="Houses">
            <HomeStack.Screen options={{headerShown:false}} name='Houses' component={Houses}/>
            <HomeStack.Screen options={{headerShown:false}} name='HouseBox' component={HouseBox}/>
            <HomeStack.Screen options={{headerShown:false}} name='HouseDetails' component={HouseDeails}/>
        </HomeStack.Navigator>
    )
}

export default function HousesStack(){
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
                <StackTab/>
            </NavigationContainer>
        </SafeAreaView>
    )
}