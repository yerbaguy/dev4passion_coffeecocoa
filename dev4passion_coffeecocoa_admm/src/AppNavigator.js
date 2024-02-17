import React from 'react'
import {  View, Dimensions, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './screens/Main';
import Add from './screens/Add';
import Register from './screens/Register';
import Fetch from './screens/Fetch';
import AddCategories from './screens/AddCategories';
const { width, height } = Dimensions.get("window")
import { useNavigation } from '@react-navigation/native';
import Account from './screens/Account';
import IndividualShopping from './screens/IndividualShopping';
import GroupShopping from './screens/GroupShopping';
import Blog from './screens/Blog';


const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Add Coffee House" component={AddCoffeehouseScreen} />
        <Drawer.Screen name="Add Coffee Roaster" component={AddCoffeeroasterScreen} />
    </Drawer.Navigator>
  )
}

const AddCoffeehouseScreen = ({ navigation }) => {
  return (
    <View><Text>AddCoffeehouse</Text></View>
  )
}

const AddCoffeeroasterScreen = ({ navigation }) => {
  return (
    <View><Text>Coffeeroaster</Text></View>
  )
}


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
  const navigation = useNavigation()
  return (
    // <div>
      
    // </div>

      <View style={{
          width,
          height,
      }}>



    <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Add" component={Add} navigation={navigation}/>
        <Tab.Screen name="Account" component={Account} navigation={navigation} />
        <Tab.Screen name="Fetch" component={Fetch} />
        <Tab.Screen name="Individual Shopping" component={IndividualShopping} />
        <Tab.Screen name="Group Shopping" component={GroupShopping} />
        <Tab.Screen name="Blog" component={Blog} />
        <Tab.Screen name="AddCategorieas" component={AddCategories} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Drawer" component={DrawerScreen} />
    </Tab.Navigator>
    </View>
  )
}

export default AppNavigator
