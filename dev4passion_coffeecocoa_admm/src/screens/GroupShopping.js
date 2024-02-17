import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const GroupShopping = () => {
    const navigation = useNavigation();
  return (
    <View>
        <Header navigation={navigation} />
      <Text>GroupShopping</Text>
    </View>
  )
}

export default GroupShopping