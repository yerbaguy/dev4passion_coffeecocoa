/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
import * as React from 'react';
import type {Node} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/AppNavigator';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Header from './src/screens/Header';
//import Upper from './src/screens/Upper';
//import Headerr from './src/screens/Headerr';


const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Add Coffee House" component={AddCoffeehouseScreen} />
        <Drawer.Screen name="Add Coffee Roaster" component={AddCoffeeroasterScreen} />
    </Drawer.Navigator>
  )
}

const AddCoffeehouseScreen = ({navigation}) => {
  return (
    <View><Text>AddCoffeehouse</Text></View>
  )
}

const AddCoffeeroasterScreen = ({navigation}) => {
  return (
    <View><Text>Coffeeroaster</Text></View>
  )
}


const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header navigation={navigation} />
      <Text>SettingsScreen</Text>
    </View>
  )
}

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header navigation={navigation} />
      <Text>MainScreen</Text>
    </View>
  )
}

const Account = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Account</Text>
    </View>
  )
}


const HomeScreen = () => {
  return (
    // <Drawer.Navigator initialRouteName="DummyHome">
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Account" component={Account} />

      {/* <Drawer.Screen name="DummyHome" component={MainScreen} /> */}
      {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}


      {/* here       */}
      {/* <Drawer.Screen name="Add Categories" component={AddCategories} />
      <Drawer.Screen name="Add Products" component={AddProducts} /> */}
       {/* here */}
    </Drawer.Navigator>
  )
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>






   
    // <NavigationContainer>
    //   {/* <Stack.Navigator initialRouteName='Login'
    //    screenOptions={{headerShown: false}}
    //   > */}
    //   {/* <Drawer.Navigator> */}
    //   <Stack.Navigator
    //     screenOptions={{ headerShown: false }}
    //   >
    //     {/* <Drawer.Screen name="Add Coffee House" component={AddCoffeehouseScreen} />
    //     <Drawer.Screen name="Add Coffee Roaster" component={AddCoffeeroasterScreen} /> */}
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Headerr" component={Headerr} />
    //     <Stack.Screen name="Register" component={Register} />
    //     {/* <Stack.Screen name="Upper" component={Upper} /> */}
    //     <Stack.Screen name="Header" component={Header} />
    //     <Stack.Screen name="AppNavigator" component={AppNavigator} />
    //     <Stack.Screen name="Drawer" component={DrawerScreen} />
    //   </Stack.Navigator>
    //   {/* </Drawer.Navigator> */}
    // </NavigationContainer>








    // <NavigationContainer>
    //   {/* <Stack.Navigator initialRouteName='Login'
    //    screenOptions={{headerShown: false}}
    //   > */}
    //   <Stack.Navigator
    //     screenOptions={{ headerShown: false }}
    //   >  
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Headerr" component={Headerr} />
    //     <Stack.Screen name="Register" component={Register} />
    //     {/* <Stack.Screen name="Upper" component={Upper} /> */}
    //     <Stack.Screen name="Header" component={Header} />
    //     <Stack.Screen name="AppNavigator" component={AppNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>
   
   
    // <NavigationContainer>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
        
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>

    //     <AppNavigator />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    // </NavigationContainer>
  );
};

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

export default App;
