import { View,Text } from "react-native";

export default function RoomBox(props){
    return(
        <View style={{width:'80%',height:420,backgroundColor:'white',padding:40}}>
            <View style={{justifyContent:'space-between',alignItems:'center',height:'100%'}}>

                <View>
                    <Text style={{fontSize:24,textAlign:'center'}}>{props.header}</Text>
                </View>
                    
                <View>
                    <Text style={{fontSize:16,textAlign:'center',lineHeight:23}}>{props.text}</Text>
                </View>

                <View>
                    <Text style={{fontSize:20,textAlign:'center',borderColor:'black',borderWidth:1,padding:10}}>Book a House</Text>
                </View>

            </View>
        </View>
    )
}