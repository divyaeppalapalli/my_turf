import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import TurfCard from "@/components/card.component";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Footer from "@/components/footer";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

const http = axios.create({
    baseURL: 'http://192.168.31.132:3000'
});

const Home = () => {
    const [turfs, setTurfs] = useState([]);

    const getTurfs = () => {
        http.get('/turfs')
        .then(res => {
            setTurfs(res.data);
        }).catch((err: AxiosError) => {
            console.log('err in home page get turfs: ', err.message);
        });
    }

    useEffect(() => {
        getTurfs();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search" />
                <FontAwesome name="search" size={20} color="#000" style={styles.searchIcon} />
            </View>

            <View style={styles.rowContainer}>
                {turfs.map((turf: any, index: number) => {
                    return <TurfCard name={turf.name || "untitled"} location="Bhiwnadi" id={turf._id} thumbnail={turf.thumbnail} key={index}/>
                })}
            </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        // height: '100%',
    },
    rowContainer: {
        paddingHorizontal: 20
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FEFDFD",
        margin: 20,
        borderRadius: 15,
        paddingHorizontal: 10,
        borderWidth: 1
    },
    searchInput: {
        height: 40
    },
    searchIcon: {
        marginLeft: 280,
    },   
}
)  