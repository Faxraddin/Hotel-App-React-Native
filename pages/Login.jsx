import {View,TextInput,TouchableOpacity,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login ({navigation}) {
    return(
        <View style={{backgroundColor:'darkgreen',height:'100%'}}>
            <View style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'column',height:'90%'}}>
               
               <View style={{width:'80%'}}>
                    <TouchableOpacity onPress={()=>(navigation.navigate('Home'))}>
                        <AntDesign name="arrowleft" size={50} color="black" />
                    </TouchableOpacity>
               </View>
               <Text style={{color:'white',fontSize:24}}>Welcome Back !</Text>
               <View style={{gap:20,backgroundColor:'white',width:'90%',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:30,paddingTop:30,borderWidth:0.5,borderRadius:9}}>
                    <View style={{display:'flex',flexDirection:'column',gap:15,width:'90%'}}>
                        <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Email'/>
                        <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Password'/>
                    </View>
                    <TouchableOpacity style={{borderWidth:0.5,borderRadius:10,padding:10,width:'90%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
                        <Text style={{color:'white'}}>Submit</Text>
                    </TouchableOpacity>
               </View>
               <View style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center',gap:15}}>
                    <Text style={{color:'white',fontSize:18}}>Doesn't have an account yet ?</Text>
                    <TouchableOpacity style={{borderWidth:0.5,borderRadius:10,padding:10,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                        <Text onPress={()=>(navigation.navigate('SignUp'))} style={{color:'black'}}>Sign Up</Text>
                    </TouchableOpacity>
               </View>

            </View>
        </View>
    )
}