import { ScrollView } from "react-native";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import Unit from "../pages/Home";

export default function Home() {
    return(
        <ScrollView>
            <Navbar/>
            <Unit/>
            <Footer/>
        </ScrollView>
    )
}