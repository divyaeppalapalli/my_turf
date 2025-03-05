import React from 'react';
import { Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

type IProps = {
    images: Array<string>;
}
 
const CustomCarousel =(props: IProps) => {
    const { images } = props;
    console.log('images ', images);
    
    return <Carousel
    autoPlay
    width={500}
    height={500 / 2}
    data={images || []}
    scrollAnimationDuration={1000}
    //onSnapToItem={(index) => console.log('current index:', index)}
    renderItem={({ item }) => (
        <View
            style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
            }}
        >
            <Image source={{uri: item}} width={500} height={250} />
        </View>
    )}
/>;
}

export default CustomCarousel;