import React from 'react';
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import TextField from '@/components/TextField';
import axios, { AxiosError } from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.0.117:3000'
});

const Login = () => {
    const router = useRouter();
    const [phoneNumber, setphoneNumber] = React.useState("");
    const [errMessage, setErrMessage] = React.useState<any>(null);

    const [password, setpassword] = React.useState("");
    const [errMessage1, setErrMessage1] = React.useState<any>(null);

    const handleLogin  = () => {
        
        if(phoneNumber !== "") {
            if(phoneNumber.length !== 10 ) {
                setErrMessage('Enter a 10 digit number...');
            } else if (phoneNumber.length === 10) {
                setphoneNumber(phoneNumber);
                setErrMessage(null);
            }
        } else {
            setErrMessage("Enter your phone number...");
        }   
        
        if (password !== "") {
            setpassword(password);
            setErrMessage1(null);
        } else {
            setErrMessage1("Enter your password...");
        }
        
        http.post('/login', {
            "phoneNumber": phoneNumber,
            "password": password
        })
        .then(res => {
            console.log('user logged in, ', res.data);
            router.replace('/(tabs)');
        }).catch((err: AxiosError) => {
            console.log('err in login: ', err.message);
        });
    }



    return <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.center}>
                <Image source={require('@/assets/images/turf_logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Login</Text>
                <Text style={styles.title_1}>Please sign in to continue.</Text>

                <TextField
                    style={styles.input}
                    placeholder="Phone Number"
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                        setphoneNumber(value);
                    }}
                />
                {errMessage && <View style={{backgroundColor: ''}}>
                    <Text style={{color: 'red'}}>{errMessage || "error..."}</Text>
                </View>}
                
                <TextField
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    maxLength={12}
                    onChangeText={(value) => {
                        setpassword(value);
                    }}
                />
                 {errMessage1 && <View style={{backgroundColor: ''}}>
                    <Text style={{color: 'red'}}>{errMessage1 || "error..."}</Text>
                </View>}

                <Text style={styles.title_2}>Forget Your Password?</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title_3}>
                <Text>Don’t have an account?</Text>
                <Pressable>
                    <Link href="/signup">
                        <Text style={{ fontSize: 16 }}>Sign Up</Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
};

export default Login;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: '#eee',
        height: '100%',
    },
    center: {
        height: '98%',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 10,

    },
    title: {
        fontWeight: '800',
        fontSize: 35,

    },
    title_1: {
        alignSelf: 'flex-start',
        fontSize: 17
    },
    title_2: {
        marginTop: -15,
        marginBottom: 20
    },
    title_3: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        alignSelf: 'center',
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%'
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 11,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    logo: {
        width: 110,
        height: 110,
        marginBottom: 8,

    }

});