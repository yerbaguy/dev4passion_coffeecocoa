import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const Account = () => {

    const navigation = useNavigation();
  return (
    <View>
        <Header navigation = {navigation} />
      <Text>Account</Text>
    </View>
  )
}

export default Account