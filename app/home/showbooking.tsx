import { StyleSheet, Text, View } from "react-native"

const book_detail = () => {


return(
    <View style={styles.container}>
         <Text style={styles.title}>Summary</Text>
         <Text style={styles.title_1}>Booking Details:</Text>
         <Text style={styles.detail}>5th mar 2025</Text>
         <Text style={styles.detail}>1pm to 2pm</Text>
         <View style={styles.card}>
         <Text style={styles.label}>Price:</Text>
         <Text style={styles.label}>GST:</Text>
         <Text style={styles.label}>Total:</Text>

         </View>
        
    </View>
    
)}

export default book_detail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height: '100%',
        padding: 20,
    },
    title: {
        marginTop: 15,
        fontSize: 20, 
        alignSelf:"center"
    },
    title_1:{
        marginTop: 15,
        fontSize: 18, 
    },
    detail:{
        marginTop: 5,
        fontSize: 16    , 
        marginHorizontal: 20
    },
    card:{
        backgroundColor: "#FFF",
        width: 370,
        height: 150,
        marginTop: 30,

    },
    label:{
        marginTop:15,
        fontSize:16,
        marginHorizontal: 20,

    }

});