/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/screens/Header';
import AddCategories from './src/screens/AddCategories';
import AddProducts from './src/screens/AddProducts';
import Account from './src/screens/Account';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
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
}

// const AppDrawerStack = () => {
//   return (
//     <Drawer.Navigator drawerContent={ props => <DrawerView {...props} />}>
//       <Drawer.Screen name="AppBottomStack" component={AppBottomStack} />
//       <Drawer.Screen name="Header" component={Header} />
//     </Drawer.Navigator>
    
      
//   )
// }

// const DrawerView = () => {
//   return (
//     <TouchableOpacity>
//     <View>
//       <Header />
//       {/* <Text>DrawerView</Text> */}
//       </View>
//       </TouchableOpacity>
//   )
// }

const AddCategoires = () => {
  return (
    <View><Text>AddCategories</Text></View>
  )
}
// const AppBottomStack = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Bottom Screen One" component={BottomScreenOne} 
//         screenOptions={{ headerShown: false }}
//       />
//       <Tab.Screen name="Bottom Screen Two" component={BottomScreenTwo} 
//         screenOptions={{ headerShown: false }}
//       />
//     </Tab.Navigator>
//   )
// }

// const BottomScreenOne = () => {
//   return (
//     <View screenOptions={{ headerShown: false }}>
//       <Header />
//       <Text>BottomScreenOne</Text>
//     </View>
//   )
// }

// const BottomScreenTwo = () => {
//   return (
//     <View>
//       <Header />
//       <Text>BottomScreenTwo</Text>
//     </View>
//   )
// }

// const SettingsScreen = () => {
//   return (
//     <View>
//       <Header />
//       <Text>SettingsScreen</Text>
//     </View>
//   )
// }
const SettingsScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DummyHome" component={MainScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const MainScreen = () => {
  return (
    <View>
      <Header />
      <Text>MainScreen</Text>
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
      <Drawer.Screen name="Add Categories" component={AddCategories} />
      <Drawer.Screen name="Add Products" component={AddProducts} />
      
    </Drawer.Navigator>
  )
}

// const Home = () => {
//   return (
//     <View><Text>Home</Text></View>
//   )
// }

// const Home1 = () => {
//   return (
//     <View><Text>Home1</Text></View>
//   )
// }

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const LeftDrawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App(): React.JSX.Element {
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

      {/* <Stack.Navigator>
        <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
      </Stack.Navigator> */}

      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Home1" component={Home1} />
      </Drawer.Navigator> */}
    </NavigationContainer>


    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

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
