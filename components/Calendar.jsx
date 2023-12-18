import React, { useState } from 'react';
import { View,Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function Calendar() {
    const [selectedStartDate, setSelectedStartDate] = useState([]);
    const [selectedEndDate, setSelectedEndDate] = useState([]);

    const handleChange = (date,type) => {
        if(type === 'END_DATE') {
            setSelectedEndDate(date);
        } 
        if(type === 'START_DATE') {
            setSelectedStartDate(date);
        }
    }

    const mindate = new Date()

    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <View style={{ width: '80%', height: 'auto', padding: 40, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CalendarPicker
                    minDate={mindate}
                    width={330}
                    height={340}
                    allowRangeSelection={true}
                    onDateChange={handleChange}
                />
                <Text>SELECTED START DATE:{ selectedStartDate ? selectedStartDate.toString():'' }</Text>
                <Text>SELECTED END DATE:{ selectedEndDate ? selectedEndDate.toString():'' }</Text>
            </View>
        </View>
    );
}
