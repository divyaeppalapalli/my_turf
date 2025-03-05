import { router } from "expo-router";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"

const slot_page = () => {
    const slots = [];
    for (let i = 1; i <= 10; i++) {
        const dayNames = ["Mon","Tue", "Wed", "Thu", "Fri", "Sat","Sun"];
        slots.push({ day: dayNames[i - 1], date: [i] });
      }

    const handleBookdetail = () => {
        router.push({pathname: `/home/showbooking`});
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name_turf}>turf name</Text>
            </View>
            <Text style={styles.b_title}>Select Booking Date :</Text>
            <Text style={styles.b_title}>Today, 3rd Mar 2025</Text>
            <View>
            <ScrollView horizontal contentContainerStyle={{height: 90, gap: 10,}}>
                {slots.map((slot, index) => {
                    return <View style={styles.dateDay} key={`slot-${index}`}>
                    <Text style={styles.whiteText}>{slot.day}</Text>
                    <Text style={styles.whiteText}>{slot.date}</Text>
                </View>
                })}
            </ScrollView>
            </View>
            <Text style={styles.b_title}>Select Time Slots:</Text>
            <ScrollView horizontal contentContainerStyle={{height: 90, gap: 10}}>
                {slots.map((slot, index) => {
                    return <View style={styles.dateDay} key={`slot-${index}`}>
                    <Text style={styles.whiteText}>Tue</Text>
                    <Text style={styles.whiteText}>
                        {index + 1}
                    </Text>
                </View>
                })}
            </ScrollView> 
            <TouchableOpacity style={styles.button} onPress={() => handleBookdetail()}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
        </View>
    );
};

export default slot_page;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height: '100%',
        padding: 20,
    },
    name_turf:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:10,
            },
    b_title:{
        marginTop: 15,
        fontSize: 18, 
    
    },
    dateDay: {
        backgroundColor: '#275F8E',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 18,
        alignItems:"center",
        marginTop:20,   
        
    },
    button: { 
        backgroundColor: '#275F8E', 
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 10,
    },
    buttonText: { 
        color: 'white', 
        fontSize: 18 
    },
    whiteText: {
        color: 'white'
    }
});