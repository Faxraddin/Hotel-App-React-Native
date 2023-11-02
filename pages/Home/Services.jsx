import { View,Text } from "react-native";
import ServicesOBox from "../../components/Services";

export default function Services () {

    const data = [
        {
            name:'Nature Trails',
            text:'Enjoy serene fishing moments by the lake, or paddle a canoe on tranquil waters, embracing the soothing beauty of nature.',
        },
        {
            name:'Walking',
            text:"Wander picturesque trails, discovering hidden gems, from scenic viewpoints to wildlife spotting, a nature lover's paradise.",
        },
        {
            name:'Restaurant',
            text:'Indulge in farm-to-table feasts at our lakeside restaurant, savoring flavors while taking in captivating lakeside vistas.',
        },
        {
            name:'Recreation Hub',
            text:'Dive into outdoor fun with fishing, cycling, and evening strolls by the lake, creating cherished memories with loved ones.',
           
        },
        {
            name:'Relaxation Retreat',
            text:'Unwind in lakeside bliss with spa treatments, lakeshore yoga, and peaceful moments gazing at starlit skies.',
        
        },
        {
            name:'Cultural Excursions',
            text:'Immerse in local heritage with guided tours to historic sites, followed by a relaxing lakeside picnic, enriching your stay.',
           
        },
 
    ];

    return(
        <View style={{width:'100%',justifyContent:'center',alignItems:'center',paddingBottom:70}}>
            <View style={{width:'90%',paddingTop:60,alignItems:'center'}}>

                <Text style={{fontSize:23}}>Services</Text>
                {data.map(i => <ServicesOBox  text={i.text} name={i.name}/>)}

            </View>
        </View>
    )
}