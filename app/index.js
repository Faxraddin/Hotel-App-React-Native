import { View } from "react-native";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import Unit from "../pages/Home";

export default function Home() {
    return(
        <View>
            <Navbar/>
            <Unit/>
            <Footer/>
        </View>
    )
}