import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import Header from './Header';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const saveUser = async () => {

  

  

    const credentials = {
      apiKey: "AIzaSyAAjeOP0ET_Kd52sUDuBOooUt_C3RYo1iQ",
      projectId: "coffeecocoa-a4560",
      // databaseURL: "https://coffeecocoa.firebaseio.com",
      databaseURL: "https://coffeecocoa.firebase.com",
      appId: "1:645137777464:android:a6559bd5890e38673af7cd",
      storageBucket: "",
      messagingSenderId: "645137777464",
    };

    //await firebase.initializeApp(credentials, config);
      await firebase.initializeApp(credentials);
      

    

    setModalVisible(true);
    const userId = uuid.v4();
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        userId: userId,
        cart: [],
      })
      .then(res => {
        // setModalVisible(false);
        // navigation.goBack();
        console.log("user saved")
      })
      .catch(error => {
        // setModalVisible(false);
        // console.log(error);
        console.log(error);
      });
  };



  return (
    <View style={styles.container}>
      <Header />
      <Text>register</Text>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Name'}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email Id'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Mobile'}
        keyboardType={'number-pad'}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password '}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (
            email !== '' &&
            password !== '' &&
            name !== '' &&
            mobile !== '' &&
            mobile.length > 9
          ) {
            saveUser();
          } else {
            alert('Please Enter Data');
          }
        }}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 100,
    alignSelf: 'center',
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
  },
  loginBtn: {
    backgroundColor: 'orange',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});