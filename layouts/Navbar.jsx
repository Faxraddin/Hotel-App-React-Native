import { View,Text,Image } from "react-native";

export default function Navbar () {
    return (
        <View style={{justifyContent:'center',paddingTop:15,alignItems:'center',width:'100%'}}>  
            <View style={{width:'100%',flexDirection:'column',gap:30,justifyContent:'center',alignItems:'center'}}>

                <View style={{flexDirection:'row',gap:24}}>
                    <Image style={{width:25,height:25}} source={require('../public/facebook.png')}/>
                    <Image style={{width:25,height:25}} source={require('../public/instagram.png')}/>
                    <Image style={{width:25,height:25}} source={require('../public/menu.png')}/>
                </View>
                <View style={{flexDirection:'row',gap:17}}>
                    <Text style={{fontSize:17}}>Home</Text>
                    <Text style={{fontSize:17}}>About</Text>
                    <Text style={{fontSize:17}}>Services</Text>
                    <Text style={{fontSize:17}}>See & Do</Text>
                    <Text style={{fontSize:17}}>Houses</Text>
                </View>
                
            </View>

        </View>
    )
}