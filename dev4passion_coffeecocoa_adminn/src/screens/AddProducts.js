import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import { RadioButton } from 'react-native-paper';

import Header from './Header';


const AddProducts = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [farm, setFarm] = useState('');
  const [farmer, setFarmer] = useState('');
  const [roaster, setRoaster] = useState('');

  const credentials = {
    apiKey: "AIzaSyAAjeOP0ET_Kd52sUDuBOooUt_C3RYo1iQ",
    projectId: "coffeecocoa-a4560",
    // databaseURL: "https://coffeecocoa.firebaseio.com",
    databaseURL: "https://coffeecocoa.firebase.com",
    appId: "1:645137777464:android:a6559bd5890e38673af7cd",
    storageBucket: "",
    messagingSenderId: "645137777464",
  };


  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
    // You can add your custom logic here based on the selected value
    switch (value) {
      case 'option1':
        // Execute actions for Option 1
        console.log('Option 1 selected');
        break;
      case 'option2':
        // Execute actions for Option 2
        console.log('Option 2 selected');
        break;
      case 'option3':
        // Execute actions for Option 3
        console.log('Option 3 selected');
        break;
      default:
        break;
    }
  };

  const addProduct = () => {

   // const app = firebase.initializeApp(credentials);

    //const userId = uuid.v4();

    console.log("ksdlfkjs");

    firestore().collection('products').add({
      // email: email,
      // password: password

      // categoryId: userId,
      // categoryName: categoryName

      productDescription: productDescription,
      farm: farm,
      farmer: farmer,
      roaster: roaster

    })
      .then(() => {
        console.log("Added")
      })
  }

  return (
    
  //  <SafeAreaView>
     <ScrollView>
      <Header />
    <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      <Text>Choose an option:</Text>
      <RadioButton.Group
        onValueChange={(value) => handleRadioButtonPress(value)}
        value={selectedValue}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="option1" color="blue" />
          <Text>Option 1</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="option2" color="red" />
          <Text>Option 2</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="option3" color="green" />
          <Text>Option 3</Text>
        </View>
      </RadioButton.Group>
      <Text>Selected Value: {selectedValue}</Text>
      {/* { selectedValue == "option1" ? <Text>lakjsd</Text> : null } */}
      {selectedValue == "option1" ? <View>
        <TextInput value={productDescription} onChangeText={(productDescription) => { setProductDescription(productDescription) }} placeholder="product description"></TextInput>
          <TextInput value={farm} onChangeText={(farm) => { setFarm(farm) }} placeholder="farm"></TextInput>
          <TextInput value={farmer} onChangeText={(farmer) => { setFarmer(farmer) }} placeholder="farmer"></TextInput>
          <TextInput value={roaster} onChangeText={(roaster) => { setRoaster(roaster) }} placeholder="roaster"></TextInput>
          {/* <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput>
          <TextInput value={productName} onChangeText={(productName) => { setProductName(productName) }} placeholder="product name"></TextInput> */}




      </View> : null}
      

      
      <Button
        title="Perform Action"
        onPress={() => {
          // You can perform an action based on the selected value here as well
          switch (selectedValue) {
            case 'option1':
              // Execute actions for Option 1 when the button is pressed
              <View><Text>lksdlfk</Text></View>
              console.log('Performing action for Option 1');
              break;
            case 'option2':
              // Execute actions for Option 2 when the button is pressed
              console.log('Performing action for Option 2');
              break;
            case 'option3':
              // Execute actions for Option 3 when the button is pressed
              console.log('Performing action for Option 3');
              break;
            default:
              break;
          }
        }}
      />
   </View>
      <TouchableOpacity onPress={() => { addProduct(); }}><Text>Submit Data</Text></TouchableOpacity>

   </ScrollView>
   
    // <View style={styles.main}>
    //   <Text>AddProducts</Text>
    //   <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
    //     <View style={styles.wrapper}>
    //       <View style={styles.radio}>
    //         {selectedRadio == 1 ? <View style={styles.radioBg}></View>:null}            
    //       </View>
    //       <Text style={styles.radioText}>Radio 1</Text>
    //     </View>
    //   </TouchableOpacity>

    //   <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
    //     <View style={styles.wrapper}>
    //       <View style={styles.radio}>
    //         {selectedRadio == 2 ? <View style={styles.radioBg}><Text>llsksksk</Text></View> : null}
    //       </View>
    //       <Text style={styles.radioText}>Radio 2</Text>
    //     </View>
    //   </TouchableOpacity>

    
    // </View>
  
  )
}


const styles = StyleSheet.create({

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    fontSize: 20,
    color: 'black'
  },
  radio: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 3,
    margin: 10
  },
  wrapper: {
    flowDirection: 'row',
    alignItems: 'center'
  },
  radioBg: {
    backgroundColor: "black",
    height: 28,
    width: 28,
    margin: 3,
    borderRadius: 20
  }

});

export default AddProducts