import React from 'react';
import TextField from "@/components/TextField";
import { Link, useRouter} from "expo-router";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios, { AxiosError } from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.0.117:3000'
});

const SignUp = () => {
    const router = useRouter();
    const [name, setName] = React.useState("");
    const [errMessage, setErrMessage] = React.useState<any>(null);

    const [phoneNumber, setphoneNumber] = React.useState("");
    const [errMessage1, setErrMessage1] = React.useState<any>(null);

    const [password, setpassword] = React.useState("");
    const [errMessage2, setErrMessage2] = React.useState<any>(null);

    const [conpassword, setconpassword] = React.useState("");
    const [errMessage3, setErrMessage3] = React.useState<any>(null);

    const handleSignUp = () => {
        
        if(name !== "") {
            setName(name);
            setErrMessage(null);
        } else {
            setErrMessage("Enter your name...");
        }
        
        if(phoneNumber !== "") {
            if(phoneNumber.length !== 10 ) {
                setErrMessage1('Enter a 10 digit number...');
            } else if (phoneNumber.length === 10) {
                setphoneNumber(phoneNumber);
                setErrMessage1(null);
            }
        } else {
            setErrMessage1("Enter your phone number...");
        }   
        
        if(password !== "") {
            setpassword(password);
            setErrMessage2(null);
        } else {
            setErrMessage2("Enter your password...");
        } 

        if(conpassword !== "") {
            if(conpassword !== password) {
                setErrMessage3('password does not match...');
            } else if (conpassword === password) {
                setconpassword(conpassword);
                setErrMessage3(null);
            }
        } else {
            setErrMessage3("Enter your confirm password...");
        }   
        http.post('/createUser', {
            "name": name,
            "phoneNumber": phoneNumber,
            "password": password
        })
        .then(res => {
            console.log('user signed in, ', res.data);
            router.replace('/(tabs)');
        }).catch((err: AxiosError) => {
            console.log('err in signup: ', err.message);
        });
    }

    return <SafeAreaView style={{backgroundColor: '#E1E5F2'}}>
        <View style={styles.container}>
            <View style={styles.center}>
                <Image source={require('@/assets/images/turf_logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Create Account</Text>

                <TextField placeholder="Enter Your Name" maxLength={20} onChangeText={(value) => {
                    setName(value);
                }} />
                {errMessage && <View style={{backgroundColor: ''}}>
                    <Text style={{color: 'red'}}>{errMessage || "error..."}</Text>
                </View>}

                <TextField
                    placeholder="Phone Number"
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                        setphoneNumber(value);
                    }}
                />
                 {errMessage1 && <View style={{backgroundColor: ''}}>
                    <Text style={{color: 'red'}}>{errMessage1 || "error..."}</Text>
                </View>}
                

                <TextField
                    placeholder="Password"
                    secureTextEntry
                    maxLength={12}
                    onChangeText={(value) => {
                        setpassword(value);
                    }}
                />
                 {errMessage2 && <View style={{backgroundColor: ''}}>
                    <Text style={{color: 'red'}}>{errMessage2 || "error..."}</Text>
                </View>}
                

                <TextField
                    placeholder="Confirm Password"
                    secureTextEntry
                    maxLength={12}
                    onChangeText={(value) => {
                        setconpassword(value);
                    }}
                />
                {errMessage3 && <View style={{backgroundColor: ''}}>
                    <Text style={{color: 'red'}}>{errMessage3 || "error..."}</Text>
                </View>}

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title_1}>
                <Text>Already have an account?</Text>
                <Pressable>
                    <Link href="/(auth)">
                        <Text style={{ fontSize: 16 }}>Sign in</Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: '#E1E5F2',
        height: '100%',
    },
    center: {
        height: '93%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25
    },
    title: {
        fontWeight: '800',
        fontSize: 35,
    },
    title_1: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        alignSelf: 'center',
        fontSize: 16,
        paddingTop: 40
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 11,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    logo: {
        width: 110,
        height: 110,
    }
});