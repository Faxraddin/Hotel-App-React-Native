import { View,Text,ImageBackground } from "react-native";

import ReviewBox from "../../components/ReviewBox";

export default function Reviews(){

    const data = [
        { header: 'TRIP ADVISOR REVIEWS', text: 'Highly recommended for those seeking a break from city life, immersing themselves in rural tranquility. Cozy cottages by the lake, fishing and forest walks available. Excellent location, just 5 minutes from the city. Friendly owner and staff.' },
        { header: 'TRIP ADVISOR REVIEWS', text: "Very nice guest houses. Kind and responsive hosts. Peace and tranquility. A wonderful place for those who want to relax not only physically but also spiritually. The food is super!. I'm thinking of coming back in the summer for a longer stay..." },
        { header: 'TRIP ADVISOR REVIEWS', text: "The place is very beautiful, with incredible nature. It's quite inconvenient to stay in the cottages with two families - no soundproofing at all, we could hear quiet conversations from the upper floor.This was my second trip."}
      ];

    return(
        <ImageBackground blurRadius={44} source={require('../../public/hpls.png')} resizeMode="strech">
        <View style={{paddingBottom:70,paddingTop:70}}> 
            <View style={{justifyContent:'center',alignItems:'center',gap:50}}>
                {data.map(room => <ReviewBox key={room} text={room.text} header={room.header}/>)}
            </View>
        </View>
        </ImageBackground>
    )
}