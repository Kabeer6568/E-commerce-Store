import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Config/Firebase'



const LoginForm = ({navigation}) => {
  function screenHandler() {
    navigation.navigate('RegistrationForm');
  }

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)


const Login = ()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const data = {
      email: "admin@gmail.com"
    }
    
    if (data) {
      navigation.navigate('AdminAccount');
    } else {
      
      navigation.replace('Store');
      console.log(user);
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}


  return (
    <>
      <View style={styles.LogoStyle}>
        <Image style={styles.name} source={require('../src/img/name.jpeg')} />
        <Image
          style={styles.tagLine}
          source={require('../src/img/tagLine.png')}
        />
      </View>

      <SafeAreaView style={styles.formSettings}>
        

        <View style={styles.textInput}>
          <TextInput
            placeholderTextColor={'#D4D3D3'}
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
          />
          <Image
            style={styles.iconsize}
            source={require('../src/img/mail.png')}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholderTextColor={'#D4D3D3'}
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            // value={password}
            placeholder="Password"
          />
          <Image
            style={styles.iconsize}
            source={require('../src/img/eye.png')}
          />
        </View>

        <Text
      style={{color: '#024F9D', fontSize: 18, fontWeight: 'bold',  marginTop: 15,marginRight: 120}} 
    >Forget Password?

</Text>
      </SafeAreaView>

      <View style={styles.btnMain} >
            <TouchableOpacity style={styles.btnSize} onPress={() => Login()}>
                <Text style={styles.btnText}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>

<View style={{alignItems: 'center',}}>
      <Text
      style={{color: '#024F9D', fontSize: 18, fontWeight: 'bold',  marginTop: 15}} 
    onPress={() => screenHandler()}>Don’t have an account? Register

</Text>
</View>
    </>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
  btnMain: {
    // backgroundColor: '#61B846',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 50,
    alignContent: 'center',
  },
  btnSize: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61B846',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  formSettings: {
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D3D3',
    padding: 10,
  },
  iconsize: {
    width: 30,
    height: 30,
    marginTop: 17,
    marginLeft: 250,
    position: 'absolute',
  },
  textInput: {
    flexDirection: 'row',
  },
});

export default LoginForm;
