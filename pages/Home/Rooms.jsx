import React from 'react';
import { View, Text,ImageBackground } from 'react-native';
import RoomBox from '../../components/RoomBox';

const Rooms = () => {

  const data = [
    { header: 'Village House', text: 'Enjoy the perfect fusion of classic charm and modern ease in our charming guest houses. Experience the allure of traditional village aesthetics alongside contemporary comforts like air conditioning, high-speed Wi-Fi, and smart entertainment.' },
    { header: 'Description', text: 'Amidst scenic beauty, our village guest houses provide a peaceful retreat. Relax on your veranda, stroll through lush landscapes. Our restaurant offers a culinary fusion of classic and contemporary flavors by skilled chefs.' },
    { header: 'Timeless Harmony', text: "Whether it's romance, family time, or cultural immersion, our guest houses blend nostalgic charm and modern luxury. Enjoy guided tours, cultural activities, and a harmonious past-and-present journey for an unforgettable stay. Book now."}
  ];

  return (
    <ImageBackground blurRadius={44} source={require('../../public/sunset.png')} resizeMode="strech">
    <View style={{paddingBottom:70,paddingTop:70}}>
        <View style={{justifyContent:'center',alignItems:'center',gap:50}}>
            {data.map(room => <RoomBox key={room.house} text={room.text} header={room.header}/>)}
        </View>
    </View>
    </ImageBackground>
  );
};

export default Rooms;
