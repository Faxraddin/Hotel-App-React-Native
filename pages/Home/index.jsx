import React from "react";
import { View } from "react-native";

import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";

export default function Unit() {

  return (
    <View>
        <Home />
        <About />
        <Rooms/>
    </View>
  );
}
