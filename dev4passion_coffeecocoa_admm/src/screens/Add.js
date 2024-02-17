import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import { addDoc, collection, doc, getDocs } from '@react-native-firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const Add = () => {

  //  const [username, setName] = useState('');
  //  const [email, setEmail] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [inputTextValue, setInputTextValue] = useState('');

   const [productTypeName, setProductTypeName] = useState('');
   const [productName, setProductName] = useState('');
   
   const navigation = useNavigation();


  const credentials = {
    apiKey: "AIzaSyAAjeOP0ET_Kd52sUDuBOooUt_C3RYo1iQ",
    projectId: "coffeecocoa-a4560",
    // databaseURL: "https://coffeecocoa.firebaseio.com",
    databaseURL: "https://coffeecocoa.firebase.com",
    appId: "1:645137777464:android:a6559bd5890e38673af7cd",
    storageBucket: "",
    messagingSenderId: "645137777464",
  };

  const app = firebase.initializeApp(credentials);
 // const database = getFirestore(app);
   
  useEffect(()=>{

    // firestore().collection('admin').add({
    //   email: 'yerbaguy@gmail.com',
    //   password: '12344'
    // })
    // .then(()=>{
    //   console.log("Added")
    // })

    

  },[]);

  //  const addData = async () => {

  //     console.log("ksdlfkjs");

  //    firestore().collection('admin').add({
  //      email: 'yerbaguy@gmail.com',
  //      password: '12344'
  //    })
  //      .then(() => {
  //        console.log("Added")
  //      })
  //  }

  ////works
  const addData = async () => {

    console.log("ksdlfkjs");

    firestore().collection('admin').add({
      email: email,
      password: password
    })
      .then(() => {
        console.log("Added")
      })
      
  }
  ////

  // const addData = async () => {

  //   console.log("ksdlfkjs");

  //   firestore().collection('admin').add({
  //     email: email,
  //     password: password
  //   })
  //     // .then(() => {
  //     //   console.log("Added")
  //     // })
  //     .then((value) => {
  //       print(value.id)
  //       console.log(value.id)
  //       firestore().collection("admin")
  //       .doc(value.id)
  //       .collection("pets")
  //       .add({
  //         "name":"lakjsd",
  //         "type":"lakjsd"
  //       });
  //     });

  // }

  const addProductType = async () => {

   // console.log("ksdlfkjs");

    firestore().collection(productTypeName).add({
      // email: email,
      // password: password
      productName: productName,
    })
      .then(() => {
        console.log("Added")
      });
      // .then((value) => {
      //   print(value.id)
      //   console.log(value.id)
      //   firestore().collection("admin")
      //     .doc(value.id)
      //     .collection("pets")
      //     .add({
      //       "name": "lakjsd",
      //       "type": "lakjsd"
      //     });
      // });

  }

  // const addData = async () => {

  //   console.log("ksdlfkjs");

  //   // firestore().collection('admin').add({
  //   //   email: email,
  //   //   password: password
  //   // })
  //   //   .then(() => {
  //   //     console.log("Added")
  //   //   })

  //   const val = doc(database,"blog",'post')
  //   const collectinVal = collection(val, "feedback")
  //   addDoc(collectinVal, { email: email})

  // }


  const create = async () => {

     try {
       const response = await database().ref(app('todo/2')).set({
             value: inputTextValue
           });
           console.log(response);
     } catch (error) {
      console.log(error);
     }


    // console.log(username);
    // console.log(email);


    // set(ref(db, 'users/', userId), {
    //   username: username,
    //   email: email
    // });
    // database()
    //   .ref('/users/123')
    //   .set({
    //     name: 'Ada Lovelace',
    //     age: 31,
    //   })
    //   .then(() => console.log('Data set.'));
  };


  return (
    <View>
      <Header navigation={navigation} />
      <Text>Add</Text>
      {/* <TextInput placeholder="Enter Any Value" value = {inputTextValue} onChangeText={ value => setInputTextValue(value) } ></TextInput> */}

        {/* <TextInput value = {username} onChangeText = { (username) => { setName(username)} } placeholder="username"></TextInput>
       <TextInput value = {email} onChangeText = { (email) => { setEmail(email)} } placeholder="email"></TextInput>  */}

      {/* <TextInput value={inputTextValue} onChangeText={(value) => { setInputTextValue(value) }} placeholder="email"></TextInput>  */}
    
      
      <TextInput value={email} onChangeText={(email) => { setEmail(email) }} placeholder="email"></TextInput> 
      <TextInput value={password} onChangeText={(password) => { setPassword(password) }} placeholder="password"></TextInput> 

      <TextInput value={productTypeName} onChangeText={(productTypeName) => { setProductTypeName(productTypeName) }} placeholder="product type name"></TextInput>
      <TextInput value={productName} onChangeText={(productName) => { setProductName(productTypeName) }} placeholder="product name"></TextInput> 



       {/* <TouchableOpacity onPress={()=>{ create(); }}><Text>Submit Data</Text></TouchableOpacity> */}
      
      <TouchableOpacity onPress={() => { addData(); }}><Text>Submit Data</Text></TouchableOpacity>
      
      
      {/* <TouchableOpacity onPress={() => { addProductType(); }}><Text>Submit Data</Text></TouchableOpacity> */}

      
     
    </View>
  )
}

export default Add