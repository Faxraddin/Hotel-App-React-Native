import TabBottom from "../components/Tabs";

import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";

const persistor = persistStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    
      <SafeAreaView style={{zIndex:4,height:'100%'}}>
          <Stack.Screen  options={{
            headerShown:false
          }}/>

          <TabBottom />
      </SafeAreaView>
    
      </PersistGate>
    </Provider>
  );
}
