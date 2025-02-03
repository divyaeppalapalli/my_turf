import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";

type IProps = {
    name: string;
    location: string;
    thumbnail: string;
    id: string;
   
}

const TurfCard = (props: IProps) => {
    const { name, location, thumbnail = '@/assets/images/no-image.png', id } = props;
    const router = useRouter();

    const handleBookNow = (turfId: string) => {
        router.push({pathname: `/home/detailpage`, params:{turfId: turfId}});
    }

    return <React.Fragment>
        <View style={styles.cardContainer}>
            <View>
                <View style={styles.imageWrapper}>
                    <Image style={{width: 50, height: 50, resizeMode: 'contain'}} source={{uri: thumbnail}} width={50} height={50}/>
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
                <Button title='Book Now' onPress={() => handleBookNow(id)} />
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
        paddingHorizontal: 10,
        marginBottom: 10,
        alignItems: "center"
    },
    imageWrapper: {
        backgroundColor: '#eee',
        borderRadius: 5,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    name_list: {        
        flex: 1,
        alignItems: "flex-start",
        marginLeft: 15
    },
})