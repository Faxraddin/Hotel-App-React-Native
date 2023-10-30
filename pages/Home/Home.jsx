import { View,ImageBackground,Text } from "react-native";

export default function Home() {
    return (
        <View>
            <ImageBackground resizeMode="cover" style={{width:'100%',height:600,alignItems:'center',justifyContent:'center'}} source={require('../../public/main3.png')}>
                <Text style={{fontSize:33,color:'white'}}>Welcome To HopeLake!</Text>
            </ImageBackground>
        </View>
    )
}