import { View,Text,TouchableOpacity,Image,ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState} from "react";

import { useSelector } from "react-redux";

export default function HouseDetails({navigation}){

    const house = useSelector((state)=>state.house.houseNumber)
    const image = useSelector((state)=> state.house.img1)


    const [calendar,setCalendar] = useState(false);
    const handleClick = () => {
        navigation.navigate('Calendar')
    }

    return(
        <ScrollView>
            <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:`${calendar ? 'gray':''}`,overflow:`${calendar?'hidden':''}`}}>
                <View style={{width:'80%',gap:50}}>
                    
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:10}}>
                        <View style={{borderRightWidth:1,paddingRight:20}}>
                            <TouchableOpacity onPress={()=>(navigation.navigate('Houses'))}>
                                <AntDesign name="arrowleft" size={50} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginLeft:20,fontSize:25}}>House {house}</Text>
                    </View>
                    <View style={{gap:20}}>
                        <Image style={{width:'100%',height:300,borderRadius:10}} resizeMode="cover" source={image}/>
                        <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',padding:30,gap:30,borderRadius:10}}>
                            <View style={{borderLeftWidth:1,gap:10,width:'90%',padding:30}}>
                                <Text style={{fontSize:22}}>Price</Text>
                                <Text style={{fontSize:20}}>{useSelector((state)=>state.house.price)}</Text>
                                <Text style={{fontWeight:600,fontSize:20}}>Per Night</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={{borderRadius:10,backgroundColor:'black',width:260,justifyContent:'center',alignItems:'center',padding:10}}>
                                    <Text onPress={handleClick} style={{color:'white',fontSize:19}}>Book Now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:20,gap:20}}>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:100,borderBottomWidth:.5,paddingBottom:20}}>
                                <Text style={{fontSize:15,fontWeight:600}}>Propertis</Text>
                                <View style={{flexDirection:'column',gap:15,width:175}}>
                                    <Text style={{fontSize:15}}>Accommodates:4</Text>
                                    <Text style={{fontSize:15}}>king</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:100,borderBottomWidth:.5,paddingBottom:20}}>
                                <Text style={{fontSize:15,fontWeight:600}}>More Info</Text>
                                <View style={{flexDirection:'row',width:175}}>
                                    <Text style={{fontSize:14,}}>Charming village-style rental house with a bedroom, spacious living room, modern amenities like TV and internet, set amidst a rustic backdrop of brick and stone, offering a tranquil retreat from city life!</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:40,borderBottomWidth:.5,paddingBottom:20}}>
                                <Text style={{fontSize:15,fontWeight:600}}>Check In and Out:</Text>
                                <View style={{flexDirection:'column',gap:15,width:175}}>
                                    <Text style={{fontSize:14}}>Check-In: 14:00 PM</Text>
                                    <Text style={{fontSize:14}}>Check-Out: 11:00 AM</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}