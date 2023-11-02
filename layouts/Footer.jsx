import { View,Text,Image } from "react-native";
import MapView from 'react-native-maps';

export default function Footer() {
    return(
        <View>
            <View>
                <MapView
                    
                    initialRegion={{
                    latitude: 41.639871,
                    longitude: 46.617784,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }}
                />
                <Image style={{width:'100%',height:380}} source={require('../public/map.png')}/>
            </View>
        </View>
    )
}