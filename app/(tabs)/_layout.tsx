import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: "#275F8E", paddingVertical: 10, } }}>
      <Tabs.Screen
        name="index"
        options={{          
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}  />,
          header: (props) => {
            return <View style={styles.header}>
            <MaterialCommunityIcons name="cricket" size={24} color="white" />
                <Text style={styles.headerText}>My Turf Book</Text>
            </View>
          },
          // headerStatusBarHeight: StatusBar.currentHeight
        }}
      />
      <Tabs.Screen
        name="bookingdetails"
        options={{
          title: 'Booking History',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    },
    rowContainer: {
        paddingHorizontal: 20
    },
    header: {
        backgroundColor: "#275F8E",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 20
    },
    headerText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 20
        
    },
   
   
}
)  
