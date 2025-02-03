import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Footer from "@/components/footer";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import CustomCarousel from "./slider";

const http = axios.create({
    baseURL: 'http://192.168.0.117:3000'
});

type IProps = {
    name: string;
    address: string;
    thumbnail: string;
    contact: string;
    note: string;
    images: [string];
}
const DetailPage = (props: IProps) => {
    const { turfId } = useLocalSearchParams();
    {/*console.log('id: ', turfId);*/}

    const [turf, setTurf] = useState<any>();

    const getTurf = () => {
        http.get('/turf/' + turfId)
            .then(res => {
                {/*console.log('turf: ', res.data);*/}
                setTurf(res.data);
            }).catch((err: AxiosError) => {
                console.log('err in home page get turfs: ', err.message);
            });
    }

    useEffect(() => {
        getTurf();
    }, []);


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.images}>
                    <CustomCarousel images={turf?.images}/>
                    {/* <Image style={{ width: 400, height: 200, }} source={require('@/assets/images/turf_image.jpg')} width={50} height={50} /> */}
                </View>
            </View>

            <View>
                <Text style={styles.name_turf}>{turf?.name}</Text>
            </View>
            <Text style={styles.sectionTitle}>Book a Slot</Text>
            {/* book slot*/}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="cricket" size={24} color="black" />
                    <Text style={styles.buttonText}>Cricket</Text>
                    <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome5 name="futbol" size={24} color="black" />
                    <Text style={styles.buttonText}>Football</Text>
                    <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
            </View>
            {/* address*/}
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>
                {turf?.address}
            </Text>
            {/* contact*/}
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{turf?.contact}</Text>
            {/* note*/}
            <Text style={styles.label}>Note:</Text>
            <Text style={styles.value}>{turf?.note}</Text>
            


            {/* <View>
                <Footer/>
            </View>*/}

        </View >
    )
}

export default DetailPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height: '100%',
    },
    images: {
        width: 500,
        height: 500 / 2,
        // backgroundColor: '#eee',
        // borderRadius: 10,
        alignItems: "center",


    },
    sectionTitle: {
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 20
    },

    name_turf: {
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 10,
        marginTop: 5,
        marginLeft: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: 160,
        marginRight: 20,
        marginLeft: 20,
        height: 100

    },
    buttonText: {
        fontSize: 19,
    },
    bookText: {
        color: 'white',
        fontSize: 18,
        backgroundColor: "#275F8E",
        width: 160,
        paddingVertical: 6,
        paddingLeft: 60,
        borderRadius: 10,

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20


    },
    value: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 20

    },





})