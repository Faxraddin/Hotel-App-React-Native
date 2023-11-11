import { View,Text,ImageBackground,ScrollView,Button } from "react-native";
import React from "react";
import HouseBox from "../components/House";

export default function Houses ({ navigation }) {
    const data = [
        {id:1,houseNumber:1,houseText:'Charming village-style rental house with a bedroom, spacious living room...',beds:'king',price:100 ,img:require('../public/ev1.jpeg'),img1:require('../public/ev11.jpg'),img2:require('../public/ev12.jpg'),img3:require('../public/ev13.jpg'),img4:require('../public/ev14.jpg'),img5:require('../public/ev15.jpg')},
        {id:2,houseNumber:2,houseText:"Discover the enchanting allure of our two-story village-style rental house, where...",beds:'king',price:160 ,img:require('../public/house2.jpeg'),img1:require('../public/ev21.jpg'),img2:require('../public/ev22.jpg'),img3:require('../public/ev23.jpg'),img4:require('../public/ev24.jpg'),img5:require('../public/ev25.jpg')},
        {id:3,houseNumber:3,houseText:'Welcome to our delightful three-room village-style rental house, exuding rustic...',beds:'king',price:140 ,img:require('../public/ev3.jpeg'),img1:require('../public/ev31.jpg'),img2:require('../public/ev32.jpg'),img3:require('../public/ev33.jpg'),img4:require('../public/ev34.jpg'),img5:require('../public/ev35.jpg')},
        {id:4,houseNumber:4,houseText:'Embrace the serenity of our enchanting village-style rental property, featuring a...',beds:'king',price:80 ,img:require('../public/house4.jpg'),img1:require('../public/ev41.jpg'),img2:require('../public/ev42.jpg'),img3:require('../public/ev43.jpg'),img4:require('../public/ev44.jpg'),img5:require('../public/ev45.jpg')},
        {id:5,houseNumber:5,houseText:'Discover the pinnacle of comfort in our final village-style rental house, where...',beds:'king',price:110 ,img:require('../public/ev5.jpeg'),img1:require('../public/ev51.jpg'),img2:require('../public/ev52.jpg'),img3:require('../public/ev53.jpg'),img4:require('../public/ev54.jpg'),img5:require('../public/ev55.jpg')},
        {id:6,houseNumber:6,houseText:'Experience the epitome of comfort and charm in our final village-style rental...',beds:'king',price:110 ,img:require('../public/house6.jpeg'),img1:require('../public/ev61.jpg'),img2:require('../public/ev62.jpg'),img3:require('../public/ev63.jpg'),img4:require('../public/ev64.jpg'),img5:require('../public/ev65.jpg')},
    ];

    return(
        <ScrollView style={{width:'100%'}}>
            <View style={{width:'100%'}}>
                
                <ImageBackground source={require('../public/rooom.jpg')}>
                    <View style={{width:'100%',height:300,justifyContent:'center',alignItems:'center'}}>
                        <View style={{borderWidth:1,borderColor:'white',height:120,width:202,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{textAlign:'center',fontSize:24,color:'white'}}>OUR HOUSES</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:50,gap:40}}>
                    {data.map(home => <HouseBox
                        houseNumber={home.houseNumber}
                        houseText={home.houseText}
                        img={home.img}
                        price={home.price}
                        key={home.id}
                        img1={home.img1}
                        navigation={navigation}
                        />
                    )}
                </View>

            </View>
        </ScrollView>
    )
}