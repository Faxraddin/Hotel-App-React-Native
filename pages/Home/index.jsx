import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
import SeeDo from "./SeeDo";
import Photos from "./Photos";
import Services from "./Services";
import Reviews from "./Reviews";
import Navbar from "../../layouts/Navbar";
import Footer from '../../layouts/Footer'

import TabBottom from "../../components/Tabs";
import { ScrollView, View } from "react-native";

export default function Unit({navigation}){
  return(
    <View>
      <ScrollView>
        <Navbar navigation={navigation}/>

        <Home/>
        <About/>
        <Rooms/>
        <SeeDo/>
        <Photos/>
        <Services/>
        <Reviews/>

        <Footer/>
      </ScrollView>
      <TabBottom/>
    </View>

  )
}