import { View,Text,Image,ImageBackground } from "react-native";

export default function Navbar () {
    return (
        <ImageBackground blurRadius={2} resizeMode="cover" style={{width:'100%',alignItems:'center',justifyContent:'center'}} source={require('../public/fornav.png')}>
        <View style={{justifyContent:'center',paddingTop:15,alignItems:'center',width:'100%',paddingBottom:30,paddingTop:30,elevation:5,shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOpacity: 1, shadowRadius: 2 }}>  
            <View style={{width:'100%',flexDirection:'column',gap:30,justifyContent:'center',alignItems:'center'}}>

                <View style={{flexDirection:'row',gap:24}}>
                    <Image style={{width:25,height:25}} source={require('../public/facebook.png')}/>
                    <Image style={{width:25,height:25}} source={require('../public/instagram.png')}/>
                    <Image style={{width:25,height:25}} source={require('../public/menu.png')}/>
                </View>
                <View style={{flexDirection:'row',gap:15}}>
                    <Text style={{fontSize:18,color:'rgb(27, 51, 51)'}}>Home</Text>
                    <Text style={{fontSize:18,color:'rgb(27, 51, 51)'}}>About</Text>
                    <Text style={{fontSize:18,color:'rgb(27, 51, 51)'}}>Services</Text>
                    <Text style={{fontSize:18,color:'rgb(27, 51, 51)'}}>See & Do</Text>
                    <Text style={{fontSize:18,color:'rgb(27, 51, 51)'}}>Houses</Text>
                </View>
                
            </View>

        </View>
        </ImageBackground>
    )
}