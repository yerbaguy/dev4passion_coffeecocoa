import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
//import AppNavigator from '../AppNavigator';

const Headerr = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

   

    return (
        <View>
            <Text>Headerr</Text>
            <Button title="ToMain" onPress={()=> navigation.navigate('Main')} />
{/* 
            <TextInput value={email} onChangeText={(email) => { setEmail(email) }} placeholder="email"></TextInput>
            <TextInput value={password} onChangeText={(password) => { setPassword(password) }} placeholder="password"></TextInput> */}


            {/* <TouchableOpacity onPress={()=>{ create(); }}><Text>Submit Data</Text></TouchableOpacity> */}

  
  
  
            {/* <TouchableOpacity onPress={() => { doLogin(); }}><Text>Loginnnn</Text></TouchableOpacity> */}

        </View>
    )
}

export default Headerr