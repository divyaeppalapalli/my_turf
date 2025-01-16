import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";

const TurfCard = () => {
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
            <View>
                <View>
                    <Text>Turf Name</Text>
                </View>
                <View>
                    <Text>Area Name</Text>
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
        justifyContent: 'space-between',
        elevation: 3,
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    imageWrapper: {
        backgroundColor: '#eee',
        borderRadius: 5,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
})