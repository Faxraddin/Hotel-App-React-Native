import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


export default function Calendar({navigation}) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleChange = (date, type) => {
    const selectedDate = new Date(date);
    
    if (type === 'END_DATE') {
      setSelectedEndDate(selectedDate);
    }
    if (type === 'START_DATE') {
      setSelectedStartDate(selectedDate);
    }
  };

  const mindate = new Date();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        gap:'150%'
      }}
    >
        <View style={{width:'80%'}}>
            <TouchableOpacity onPress={()=>(navigation.navigate('Houses'))}>
                <AntDesign name="arrowleft" size={50} color="black" />
            </TouchableOpacity>
       </View>
       <View
        style={{
          width: '80%',
          height: 'auto',
          padding: 40,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
       >
            <CalendarPicker
              minDate={mindate}
              width={290}
              allowRangeSelection={true}
              onDateChange={handleChange}
            />
            <Text>
            SELECTED START DATE:{' '}
            {selectedStartDate ? selectedStartDate.toLocaleDateString() : ''}
            </Text>
            <Text>
            SELECTED END DATE:{' '}
            {selectedEndDate ? selectedEndDate.toLocaleDateString() : ''}
            </Text>
       </View>
    </View>
  );
}