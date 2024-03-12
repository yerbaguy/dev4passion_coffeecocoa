/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import type {Node} from 'react';
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

import Header from './src/screens/Header';
import Main from './src/screens/Main';
import Account from './src/screens/Account';
import AddProduct from './src/screens/AddProduct';

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


// const HomeScreen = () => {
//  return (
//      <Drawer.Navigator initialRouteName="Main">
//       <Drawer.Screen name="Main" component={MainScreen} />
//       <Drawer.Screen name="Account" component={Account} />
//      </Drawer.Navigator>
//  )
// }

const HomeScreen = () => {
  return (
    // <Drawer.Navigator initialRouteName="DummyHome">
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Add Product" component={AddProduct} />

      {/* <Drawer.Screen name="DummyHome" component={MainScreen} /> */}
      {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}


      {/* here       */}
      {/* <Drawer.Screen name="Add Categories" component={AddCategories} />
      <Drawer.Screen name="Add Products" component={AddProducts} /> */}
      {/* here */}
    </Drawer.Navigator>
  )
}

const SettingsScreen = () => {
  const navigation = useNavigation();
 return (
  <View>
    <Header navigation = {navigation} />
   <Text>Settings Screen</Text> 
</View>
 )
}

const MainScreen = () => {
 return (
  <View><Text>Main Screen</Text></View>
 )
}

// const Account = () => {
//  return (
//   <View><Text>Account</Text></View>
//  )
// }


const Feed = () => {
 return (
   <View>
    <Text>Feed</Text>
  </View>
 )
}

 const Article = () => {
  return (
   <View>
    <Text>Article</Text>
   </View>
  )
 }


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
