import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const Footer = () => {
    return <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem}>
                <FontAwesome name="home" size={20} color="white" />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <FontAwesome name="history" size={20} color="white" />
                <Text style={styles.navText}>Booking History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
}
    

    export default Footer;

    const styles = StyleSheet.create({
        bottomNav: {
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#275F8E",
            marginTop: 118,
            height: 70,
        },
        navItem: {
            alignItems: "center",
            justifyContent: 'center'
        },
        navText: {
            color: "white",
            fontSize: 12,
            marginTop: 5,
        },

    })
