import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const IndividualShopping = () => {
    const navigation = useNavigation();
  return (
    <View>
        <Header navigation={navigation} />
      <Text>IndividualShopping</Text>
    </View>
  )
}

export default IndividualShopping