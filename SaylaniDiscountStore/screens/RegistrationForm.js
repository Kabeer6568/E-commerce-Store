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
  Alert,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Config/Firebase'
import Store from './store';
// let auth = getAuth();




const RegistrationForm = ({navigation}) => {
  function screenHandler() {
    navigation.navigate('LoginForm');
  }
  // const [value, setValue] = React.useState({
  //   name: '',
  //   number: '',
  //   email: '',
  //   password: '',
  //   error: ''
  // })

  const [name, setName] = useState(null)
  const [number, setNumber] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const signUp = ()=>{
    createUserWithEmailAndPassword(auth, email, password, name, number )
  .then((userCredential) => {
    // Signed in 
    navigation.replace('Store');
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(setName);
    
    
    // ..
  });
  }
  
  


  // const [name, onChangeText] = React.useState('');
  // const [email, onChangeEmail] = React.useState('');
  // const [number, onChangeNumber] = React.useState('');
  // const [password, onChangePassword] = React.useState('');

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
            // value={value.name}
            onChangeText={(text) => setName(text)}
            placeholder="Full Name"
          />
          <Image
            style={styles.iconsize}
            source={require('../src/img/user.png')}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholderTextColor={'#D4D3D3'}
            style={styles.input}
            // value={value.number}
            onChangeText={(text) => setNumber(text)}
            placeholder="Contact"
            keyboardType="numeric"
          />
          <Image
            style={styles.iconsize}
            source={require('../src/img/phone.png')}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholderTextColor={'#D4D3D3'}
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            // value={value.password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="Password"
          />
          <Image
            style={styles.iconsize}
            source={require('../src/img/eye.png')}
          />
        </View>
      </SafeAreaView>

      <View style={styles.btnMain} >
            <TouchableOpacity style={styles.btnSize}  onPress={signUp} >
                <Text style={styles.btnText}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>

<View style={{alignItems: 'center',}}>
      <Text
      style={{color: '#024F9D', fontSize: 18, fontWeight: 'bold',  marginTop: 15}} 
    onPress={() => screenHandler()}>Already have an account? Login
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

export default RegistrationForm;
