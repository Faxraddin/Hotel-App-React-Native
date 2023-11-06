import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import { Stack,useRouter } from "expo-router";

import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import Unit from "../pages/Home";
import Houses from "../pages/Houses";
import { store } from "../redux/store";

const Tab = createBottomTabNavigator();
const persistor = persistStore(store)

function Tabs() {
  const router = useRouter()
  return (
    <Tab.Navigator  screenOptions={
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
      <Tab.Screen name="Home" component={Unit} />
      <Tab.Screen name="Houses" component={Houses} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    
      <SafeAreaView style={{zIndex:4,height:'100%'}}>
        <Stack.Screen options={{headerShown:false}}/>
          <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
              <Tabs />
          </NavigationContainer>
      </SafeAreaView>
    
      </PersistGate>
    </Provider>
  );
}
