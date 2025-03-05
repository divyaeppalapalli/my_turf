import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/profile.png')}
        style={styles.p_image}
      />
      {/*full name*/}
      <Text style={styles.label}>Full Name</Text>
      <Text style={styles.value}>name....</Text>
      {/*phone number*/}
      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.value}>1234567865</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  p_image: {
    height: 140,
    width: 140,
    marginTop: 30,
    marginLeft: 30
  },
  label: {
    fontSize: 20,
    marginLeft: 20,
    marginTop:50
},
value: {
    fontSize: 16,
    marginLeft: 20,
    marginTop:10
},
});
