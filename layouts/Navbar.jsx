import { View,Text,Image,ImageBackground,Button,Linking,TouchableOpacity } from "react-native";
import * as OpenPdf from 'react-native-openanything';

export default function Navbar ({navigation}) {

    const instagramHandler = () => {
        const instagramUrl = 'https://www.instagram.com/hopelake_/';
        Linking.openURL(instagramUrl);
    };

    const facebookHandler = () => {
        const facebookUrl = 'https://www.facebook.com/HopeLakeZakatala/?locale=ru_RU';
        Linking.openURL(facebookUrl);
    };

    const menuHandler = () => {
        OpenPdf.Pdf('https://hopelake.netlify.app/menu.pdf')
    };

    const redirect = () => {
        navigate('Login')
    }

    return (
        <ImageBackground blurRadius={2} resizeMode="cover" style={{width:'100%',alignItems:'center',justifyContent:'center'}} source={require('../public/fornav.png')}>
        <View style={{justifyContent:'center',paddingTop:15,alignItems:'center',width:'100%',paddingBottom:30,paddingTop:30,elevation:5,shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOpacity: 1, shadowRadius: 2 }}>  
            <View style={{width:'100%',flexDirection:'column',gap:30,justifyContent:'center',alignItems:'center'}}>

                <View style={{flexDirection:'row',gap:24}}>
                    <TouchableOpacity onPress={facebookHandler}>
                        <Image style={{width:25,height:25}} source={require('../public/facebook.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={instagramHandler}>
                        <Image style={{width:25,height:25}} source={require('../public/instagram.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={menuHandler}>
                        <Image style={{width:25,height:25}} source={require('../public/menu.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',gap:15}}>
                    <TouchableOpacity onPress><Text style={{fontSize:19,color:'rgb(27, 51, 51)'}}>Home</Text></TouchableOpacity>
                    <Text style={{fontSize:19,color:'rgb(27, 51, 51)'}}>About</Text>
                    <Text style={{fontSize:19,color:'rgb(27, 51, 51)'}}>Services</Text>
                    <Text style={{fontSize:19,color:'rgb(27, 51, 51)'}}>See & Do</Text>

                </View>
                
                <Button onPress={()=> navigation.navigate('Login')} color={'rgb(27, 51, 51)'} title='Log In'/>
            </View>
        </View>
        </ImageBackground>
    )
}