import { View,Text,Image } from "react-native";

export default function ServicesOBox(props){
    return(
        <View style={{width:'85%',justifyContent:'center',alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                
                <View style={{paddingTop:66,gap:18,width:'90%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textAlign:'center',fontSize:20,fontWeight:600}}>{props.name}</Text>
                    <Text style={{textAlign:'center',fontSize:15}}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}