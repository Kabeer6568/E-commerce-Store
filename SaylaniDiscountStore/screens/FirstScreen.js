import React from "react";
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Pressable
  } from 'react-native';
  
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  import LoginForm from "./Login";

const FirstScreen = ({navigation})=>{

    function screenHandler (){
        navigation.navigate('LoginForm')
      }

    return(
        <>
        <View style={styles.LogoStyle}>
            <Image
            style={styles.Logo}
            source={require("../src/img/Logo.png")}
            />
            <Image
            style={styles.name}
            source={require("../src/img/name.jpeg")}
            />
            <Image
            style={styles.tagLine}
            source={require("../src/img/tagLine.png")}
            />
        </View>

        <View style={styles.btnMain} >
            <TouchableOpacity style={styles.btnSize} onPress={() => screenHandler()}>
                <Text style={styles.btnText}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    
    Logo: {
      width: 250,
      height: 250,
      justifyContent: 'center',
    },
    LogoStyle: {
        alignItems: 'center',
        marginTop: 102,
    },
    name: {
        width: 330,
        height: 28,
        marginTop: 30,
    },
    tagLine: {
        width: 295,
        height: 18,
        marginTop: 20
    },
    btnMain: {
        // backgroundColor: '#61B846',
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        marginTop: 50,
        alignContent: "center",
    },
    btnSize: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#61B846',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 15

    },
    btnText:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
        

    }
    

  });

export default FirstScreen