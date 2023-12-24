import { View,Text,Image,TouchableOpacity } from "react-native";

import { setHouse } from "../redux/setHouse";
import { useDispatch } from "react-redux";

export default function HouseBox(props){
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(
          setHouse({
            houseNumber: props.houseNumber,
            price: props.price,
            houseText: props.houseText,
            img1: props.img1,
            img2: props.img2,
            img3: props.img3,
            img4: props.img4,
            img5: props.img5,
            img6: props.img6,
          })
        );
        props.navigation.navigate('HouseDetails');
    };

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
                        <TouchableOpacity onPress={handleClick} style={{alignItems:'center',justifyContent:'center',borderRadius:10,borderWidth:1,backgroundColor:'black'}}>
                            <View style={{width:'90%',borderRadius:15}}>
                                <Text style={{color:'white',width:'100%',textAlign:'center',borderRadius:8,padding:10,fontWeight:300,fontSize:18}}>More Info</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}
