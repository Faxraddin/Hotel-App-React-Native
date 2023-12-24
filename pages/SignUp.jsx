import {View,TextInput,TouchableOpacity,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SignUp = ({navigation}) => {
  return (
    <View style={{backgroundColor:'darkgreen',height:'100%'}}>
        <View style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'column',height:'100%'}}>
        
        <View style={{width:'80%'}}>
                <TouchableOpacity onPress={()=>(navigation.navigate('Home'))}>
                    <AntDesign name="arrowleft" size={50} color="black" />
                </TouchableOpacity>
        </View>
        <View style={{gap:20,backgroundColor:'white',width:'90%',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:30,paddingTop:30,borderWidth:0.5,borderRadius:9}}>
                <View style={{display:'flex',flexDirection:'column',gap:15,width:'90%'}}>
                    <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Name'/>
                    <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Email'/>
                    <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Phone'/>
                    <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Passoword'/>
                    <TextInput style={{padding:10,width:'100%',borderRadius:10,borderWidth:1}} placeholder='Confirm Password'/>
                </View>
                <TouchableOpacity style={{borderWidth:0.5,borderRadius:10,padding:10,width:'90%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
                    <Text style={{color:'white'}}>Submit</Text>
                </TouchableOpacity>
        </View>
        <View style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center',gap:15}}>
                <Text style={{color:'white',fontSize:18}}>Already have an account ?</Text>
                <TouchableOpacity style={{borderWidth:0.5,borderRadius:10,padding:10,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                    <Text onPress={()=>(navigation.navigate('Login'))} style={{color:'black'}}>Login</Text>
                </TouchableOpacity>
        </View>

        </View>
    </View>
  )
}
export default SignUp