import { View,Text } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default function Photos(){

    const imagesFood = [
        require('../../public/bread.png'),
        require('../../public/food.png'),
        require('../../public/food2.png'),
        require('../../public/lule.png'),
        require('../../public/manti.jpg'),
        require('../../public/xaca.jpeg'),
    ];

    const imagesAnimals = [
        require('../../public/crber.png'),
        require('../../public/dog2.png'),
        require('../../public/dogs.png'),
        require('../../public/duck1.png'),
        require('../../public/ld.jpeg'),
        require('../../public/horse.jpg'),
    ];

    return(
        <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
            <View style={{justifyContent:'center',alignItems:'center',width:'80%',gap:20}}>
                <View style={{flex:1,}}>
                    <SliderBox autoplay={true} parentWidth={350} sliderBoxHeight={480} images={imagesFood}/>
                </View>
                <View style={{flex:1,}}>
                    <SliderBox autoplay={true} parentWidth={350} sliderBoxHeight={480} images={imagesAnimals}/>
                </View>
            </View>
        </View>
    )
}