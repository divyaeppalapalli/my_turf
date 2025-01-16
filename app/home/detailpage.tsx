import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Footer from "@/components/footer";

const DetailPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.images}>
                    <Image style={{ width: 400, height: 200, }} source={require('@/assets/images/turf_image.jpg')} width={50} height={50} />
                </View>
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
                Opp. oswal school, kamatghar road, anjurphata, bhiwandi - 421302
            </Text>
            {/* contact*/}
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>+91 xxxxxxxxxx</Text>
            {/* note*/}
            <Text style={styles.label}>Note:
                ..
            </Text>

            <View style={styles.footerContainer}>
                <Footer/>
            </View>
        
        </SafeAreaView >
    )
}

export default DetailPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height: '100%',
    },
    images: {
        backgroundColor: '#eee',
        borderRadius: 10,
        alignItems: "center",
        marginTop: -40

    },
    sectionTitle: {
        fontSize: 20,
        marginVertical: 10,
        marginTop: 20,
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
    footerContainer: {
        
    },
    
   


})