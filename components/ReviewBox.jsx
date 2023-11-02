import { View,Text } from "react-native";

export default function ReviewBox(props){
    return(
        <View style={{width:'80%',height:330,backgroundColor:'white',padding:40}}>
            <View style={{justifyContent:'space-between',alignItems:'center',height:'100%'}}>

                <View>
                    <Text style={{fontWeight:600,fontSize:23,textAlign:'center'}}>{props.header}</Text>
                </View>
                    
                <View>
                    <Text style={{fontSize:17,textAlign:'center',lineHeight:23}}>{props.text}</Text>
                </View>


            </View>
        </View>
    )
}