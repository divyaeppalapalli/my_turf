import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import TurfCard from "@/components/card.component";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Footer from "@/components/footer";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* header*/}
            <View style={styles.header}>
            <MaterialCommunityIcons name="cricket" size={24} color="white" />
                <Text style={styles.headerText}>Turf Book</Text>
            </View>
            {/* search*/}
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search" />
                <FontAwesome name="search" size={20} color="#000" style={styles.searchIcon} />
            </View>

            <View style={styles.rowContainer}>
                <TurfCard/>
            </View>

            <View style={styles.footerContainer}>
                <Footer/>
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
        borderWidth: 1
    },
    searchInput: {
        height: 40
    },
    searchIcon: {
        marginLeft: 280,
    },
    footerContainer: {
        marginTop: 374
    },
   
}
)  