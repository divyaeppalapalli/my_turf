import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import TurfCard from "@/components/card.component";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <FontAwesome6 name="baseball-bat-ball" size={24} color="white"  />
                <Text style={styles.headerText}>Turf Book</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search" />
                <FontAwesome name="search" size={20} color="#000" style={styles.searchIcon} />
            </View>

            <View style={styles.rowContainer}>
                <TurfCard/>
            </View>

            <View style={styles.bottomNav}>
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



        </SafeAreaView>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height: '80%',
    },
    rowContainer: {
        paddingHorizontal: 20
    },
    header: {
        backgroundColor: "#275F8E",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: -50
    },
    headerText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginRight: 230
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FEFDFD",
        margin: 20,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    searchInput: {
        height: 40
    },
    searchIcon: {
        marginLeft: 280,
    },
   
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#275F8E",
        marginTop: 493,
        height: 70

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

}
)  