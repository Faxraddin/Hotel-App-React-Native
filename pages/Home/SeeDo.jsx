import { View,Text } from "react-native";

import SeeDOBox from "../../components/SeeDoBox";

export default function SeeDo(){
    
    const data = [
        {
            name:'Horse Riding',
            text:'Explore scenic trails on horseback, connecting with nature and enjoying an unforgettable adventure in the great outdoors.',
            img:require('../../public/horse.png')
        },
        {
            name:'Daily Housekeeping',
            text:'Experience impeccable cleanliness and comfort with our dedicated daily housekeeping service, ensuring a relaxing stay.',
            img:require('../../public/towel.png')
        },
        {
            name:'Restaurant',
            text:'Indulge in a culinary journey with exquisite dishes, blending local flavors and international cuisine in a charming ambiance.',
            img:require('../../public/restaurant.png')
        },
        {
            name:'Free Wifi',
            text:'Stay connected effortlessly with complimentary high-speed Wi-Fi, keeping you in touch while you relax and explore.',
            img:require('../../public/wifi.png')
        },
        {
            name:'Night Cinema',
            text:'Immerse yourself in outdoor movie magic under the stars, enjoying cinematic delights and creating memorable evenings.',
            img:require('../../public/cinema.png')
        },
        {
            name:'Hotel',
            text:'Discover comfort and luxury in our serene haven. Experience personalized service, elegant accommodations, and a perfect gateway to tranquility.',
            img:require('../../public/hotel.png')
        },
        {
            name:'Bicycle',
            text:'Pedal through scenic routes on our complimentary bicycles, discovering the surroundings at your leisure, a perfect way to explore.',
            img:require('../../public/bicycle.png')
        }
    ];

    return(
        <View style={{width:'100%',justifyContent:'center',alignItems:'center',paddingBottom:70}}>
            <View style={{width:'90%',paddingTop:60,alignItems:'center'}}>

                <Text style={{fontSize:23}}>Services</Text>
                {data.map(i => <SeeDOBox img={i.img} text={i.text} name={i.name}/>)}

            </View>
        </View>
    )
}