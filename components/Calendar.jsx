import { View,Text } from "react-native";
import { Calendar as Cal,LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';

export default function Calendar(){

    const [selected, setSelected] = useState('');

    return(
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
            <View style={{width:'80%',height:'auto',padding:40,backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Cal
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                    }}
                />
            </View>
        </View>
    )
}