import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import Unit from "../pages/Home";
import Login from "../pages/Login";

import { store } from "../redux/store";

const HomeStack = createNativeStackNavigator(); 

const persistor = persistStore(store)

function StackTab() {
  return(
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen options={{headerShown:false}} name="Home" component={Unit}/>
      <HomeStack.Screen options={{headerShown:false}} name="Login" component={Login}/>
    </HomeStack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    
      <SafeAreaView style={{zIndex:4,height:'100%'}}>
          <Stack.Screen options={{headerShown:false}}/>
          <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
              <StackTab/>
          </NavigationContainer>
      </SafeAreaView>
    
      </PersistGate>
    </Provider>
  );
}
