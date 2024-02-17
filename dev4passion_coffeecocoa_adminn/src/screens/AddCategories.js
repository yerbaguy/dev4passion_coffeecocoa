// import { View, Text } from 'react-native'
// import React from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

import Header from './Header';

const AddCategories = () => {

    const [categoryId, setCategtoryId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputTextValue, setInputTextValue] = useState('');

    const [productTypeName, setProductTypeName] = useState('');
    const [productName, setProductName] = useState('');

    const credentials = {
        apiKey: "AIzaSyAAjeOP0ET_Kd52sUDuBOooUt_C3RYo1iQ",
        projectId: "coffeecocoa-a4560",
        // databaseURL: "https://coffeecocoa.firebaseio.com",
        databaseURL: "https://coffeecocoa.firebase.com",
        appId: "1:645137777464:android:a6559bd5890e38673af7cd",
        storageBucket: "",
        messagingSenderId: "645137777464",
    };

    // const app = firebase.initializeApp(credentials);

    const addData = async () => {

      const app = firebase.initializeApp(credentials);

        const userId = uuid.v4();

        console.log("ksdlfkjs");

        firestore().collection('categories').add({
            // email: email,
            // password: password
            categoryId: userId,
            categoryName: categoryName
            
        })
            .then(() => {
                console.log("Added")
            })

    }


  return (
    <View>
      <Header />
      <Text>AddCategories</Text>

          {/* <TextInput value={email} onChangeText={(email) => { setEmail(email) }} placeholder="email"></TextInput>
          <TextInput value={password} onChangeText={(password) => { setPassword(password) }} placeholder="password"></TextInput>  */}

          <TextInput value={categoryName} onChangeText={(categoryName) => { setCategoryName(categoryName) }} placeholder="category name"></TextInput>


          <TouchableOpacity onPress={() => { addData(); }}><Text>Submit Data</Text></TouchableOpacity>





    </View>


  )
}

export default AddCategories