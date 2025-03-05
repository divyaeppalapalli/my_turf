import { Entypo, FontAwesome, FontAwesome5, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tab() {

    const handleprofileNow = () => {
        router.push({pathname: `/home/profiledetails`});
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('@/assets/images/profile.png')}
                    style={styles.p_image}
                />
                <View style={styles.label}>
                    <Text style={styles.nameText}>Name..</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleprofileNow()}>
                        <Text style={styles.editButton}>Edit Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.menu}>
                <FontAwesome name="list-ul" size={20} color="black" />
                <Text style={styles.menuText}>Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
            <FontAwesome5 name="headset" size={20} color="black" />
                <Text style={styles.menuText}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
                <Entypo name="lock" size={20} color="black" />
                <Text style={styles.menuText}>Privacy policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
                <MaterialIcons name="privacy-tip" size={20} color="black" />
                <Text style={styles.menuText}>Terms and Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
                <SimpleLineIcons name="logout" size={20} color="black" />
                <Text style={styles.menuText}>Log out</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1,
    },
    card: {
        backgroundColor: "#FFF",
        width: 412,
        height: 150,
        marginTop: 10,
        alignItems: "center",
        flexDirection: 'row',
    },
    label: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginHorizontal: 40

    },
    p_image: {
        width: 80,
        height: 80,
        alignItems: "center",
        marginHorizontal: 20

    },
    nameText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: "#275F8E",

    },
    editButton: {
        fontSize: 16,
        color: "white"
    },
    menu: {
        flexDirection: "row",
        padding: 15,
        marginVertical: 1,
        alignItems: "center"

    },
    menuText: {
        fontSize: 18,
        marginLeft: 10
    },

});
