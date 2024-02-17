import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const Blog = () => {
 const navigation = useNavigation();
    return (
    <View>
        <Header navigation={navigation} />
      <Text>Blog</Text>
    </View>
  )
}

export default Blog