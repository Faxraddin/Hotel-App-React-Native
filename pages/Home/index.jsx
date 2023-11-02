import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
import SeeDo from "./SeeDo";
import Photos from "./Photos";
import Services from "./Services";

import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'

import { ScrollView } from "react-native";

export default function Unit(){
  return(
    <ScrollView>
      <Navbar/>

      <Home/>
      <About/>
      <Rooms/>
      <SeeDo/>
      <Photos/>
      <Services/>

      <Footer/>
    </ScrollView>
  )
}