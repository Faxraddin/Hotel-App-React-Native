import { View,Text,Image,TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HouseBox(props){
    

    return(
        <View style={{width:315,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'100%',justifyContent:'center',alignItems:'center',gap:20}}>

                <Image style={{width:'100%',height:400,borderRadius:20}} resizeMode="cover" source={props.img}/> 
                <View style={{padding:10,paddingTop:30,paddingBottom:30,borderWidth:1,borderRadius:20,gap:3,justifyContent:'space-between',backgroundColor:'white',width:'100%',height:380}}>
                    <Text style={{fontWeight:600,fontSize:30}}>House {props.houseNumber}</Text>
                    <Text style={{fontWeight:300,fontSize:18}}>{props.houseText}</Text>
                    <Image style={{width:300,position:'relative',top:-20}} resizeMode="contain" source={require('../public/logoss.png')}/>
                    <View style={{width:'83%',borderLeftWidth: 1,gap:10,paddingLeft:20,position:'relative',left:30,top:-35}}>
                        <Text style={{fontWeight:300,fontSize:18}}>Price</Text>
                        <Text style={{fontWeight:300,fontSize:18}}>{props.price}</Text>
                    </View>
                    <View style={{borderRadius:20,marginTop:20,position:'relative',top:-30}}>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderRadius:20}}>
                            <View style={{width:'96%',borderRadius:15}}>
                                <Text style={{backgroundColor:'black',color:'white',width:'100%',textAlign:'center',borderRadius:20,padding:10,fontWeight:300,fontSize:18}}>More Info</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>

            </View>
        </View>
    )
}