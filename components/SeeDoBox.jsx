import { View,Text,Image } from "react-native";

export default function SeeDOBox(props){
    return(
        <View style={{width:'85%',justifyContent:'center',alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                
                <View style={{paddingTop:66,gap:18,width:'90%',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:34,height:30}} source={props.img}/>
                    <Text style={{textAlign:'center',fontSize:20}}>{props.name}</Text>
                    <Text style={{textAlign:'center',fontSize:15}}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}