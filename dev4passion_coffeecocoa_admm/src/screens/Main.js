import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import {
//   Header,
//  } from 'react-native/Libraries/NewAppScreen';

import Header from './Header';
import Headerr from './Headerr';
import { useNavigation } from '@react-navigation/native';

const Main = () => {

  const navigation = useNavigation();
  return (
   
     
   
   
    <View>
      <Header navigation={navigation}/>
      <Headerr />
      <Text>Main</Text>
    </View>


  )
}

export default Main;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


