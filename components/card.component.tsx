import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";

type IProps = {
    name: string;
    location: string;
    thumbnail: string;
}

const TurfCard = (props: IProps) => {
    const { name, location, thumbnail = '@/assets/images/no-image.png' } = props;
    const router = useRouter();

    const handleBookNow = () => {
        router.push('/home/detailpage');
    }

    return <React.Fragment>
        <View style={styles.cardContainer}>
            <View>
                <View style={styles.imageWrapper}>
                    <Image style={{width: 50, height: 50, resizeMode: 'contain'}} source={require('@/assets/images/no-image.png')} width={50} height={50}/>
                </View>
            </View>
            <View style={styles.name_list}>
                <View>
                    <Text>{name}</Text>
                </View>
                <View>
                    <Text>{location}</Text>
                </View>
            </View>
            <View>
                <Button title='Book Now' onPress={handleBookNow} />
            </View>
        </View>
    </React.Fragment>
};

export default TurfCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        elevation: 3,
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    imageWrapper: {
        backgroundColor: '#eee',
        borderRadius: 5,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    name_list: {
        
        

    },
})