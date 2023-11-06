import {View,Text} from 'react-native';
import Navbar from '../layouts/Navbar';

export default function Login ({navigation}) {
    return(
        <View>
            <View>
                <Navbar navigation={navigation}/>
            </View>
        </View>
    )
}